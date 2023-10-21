import React, { useState, useEffect, FC } from 'react';

import { ReactComponent as ArrowLeft } from 'src/assets/icons/ArrowLeftIcon.svg';
import { ReactComponent as ArrowRight } from 'src/assets/icons/ArrowRightIcon.svg';

interface IPagination {
  totalItems: any;
  itemsPerPage: number;
  onPageChange: (value: number) => void;
}

const Pagination: FC<IPagination> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage) > 100 ? 100 : Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
      setCurrentPage(newPage);
    }
  };

  const generatePageNumbers = () => {
    const pageNumbers = [currentPage];
    for (let i = 1; i <= 2; i++) {
      if (currentPage - i > 0) {
        pageNumbers.unshift(currentPage - i);
      }
      if (currentPage + i <= totalPages) {
        pageNumbers.push(currentPage + i);
      }
    }
    if (pageNumbers[0] !== 1) {
      pageNumbers.unshift(1);
    }
    if (pageNumbers[pageNumbers.length - 1] !== totalPages) {
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  const renderPageNumbers = generatePageNumbers();

  return (
    <div className="pagination">
      <button
        className="prev-button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ArrowLeft /> Prev
      </button>
      {renderPageNumbers.map((pageNumber) => (
        <span
          key={pageNumber}
          className={`page-number ${
            pageNumber === currentPage ? 'active' : ''
          }`}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </span>
      ))}
      <button
        className="next-button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next <ArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
