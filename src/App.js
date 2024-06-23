import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const pageSize = 10;

  useEffect(() => {
    setLoading(true);
    fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('failed to fetch data');
        alert('failed to fetch data'); // Show alert message on error
        setLoading(false);
      });
  }, []);

  const totalPages = Math.ceil(employees.length / pageSize);

  const handlePrevious = () => {
    if (currentPage === 1) 
      return;
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNext = () => {
    if (currentPage === totalPages) 
      return;
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const currentEmployees = employees.slice(startIndex, startIndex + pageSize);

  return (
    <div className="App">
      <h1>Employee Data</h1>
      {error && <p>{error}</p>}
      <Table data={currentEmployees} loading={loading} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
};

export default App;
