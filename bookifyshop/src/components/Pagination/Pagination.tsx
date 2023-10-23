import React, { useState, FC } from 'react';

import { ReactComponent as ArrowLeft } from 'src/assets/icons/ArrowLeftIcon.svg';
import { ReactComponent as ArrowRight } from 'src/assets/icons/ArrowRightIcon.svg';

import { IPagination } from 'src/utils/interface';
import { generatePageNumbers } from 'src/utils/helpers';

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

  const renderPageNumbers = generatePageNumbers(currentPage, totalPages);

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
          className={`page-number ${pageNumber === currentPage ? 'active' : ''}`}
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
