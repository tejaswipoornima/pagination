import React from 'react';

const Pagination = ({ currentPage, totalPages, onPrevious, onNext }) => {
  return (
    <div className='buttons'>
      <button type="button" onClick={onPrevious} >
        Previous
      </button>
      <div> {currentPage} </div>
      <button type='button' onClick={onNext} >
        Next
      </button>
    </div>
  );
};

export default Pagination;
