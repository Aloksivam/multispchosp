import React from 'react';

const Pagination = ({ totalWebinars, webinarsPerPage, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalWebinars / webinarsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${number === currentPage ? 'active' : ''}`}
          >
            <a
              onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                paginate(number);
              }}
              href="#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
