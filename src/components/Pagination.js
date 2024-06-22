import React from 'react';

const Pagination = ({ currentPage, totalPages, onPrevious, onNext }) => {
  return (
    <div>
      <button onClick={onPrevious} >
        Previous
      </button>
      <div> {currentPage } </div>
      <button onClick={onNext} >
        Next
      </button>
    </div>
  );
};

export default Pagination;
