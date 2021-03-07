import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ poksPerPage, totalPoks, paginate }) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPoks / poksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
          <Link className="page-link" onClick={() => paginate(number)} to="/pokedex">{number}</Link>
            {/* <a onClick={() => paginate(number)} href="/" className="page-link"> */}
              {/* {number}
            </a> */}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
