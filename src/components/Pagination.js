import React from "react";

export const Pagination = ({
  postsPerPage,
  setPostsPerPage,
  totalPosts,
  paginate,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const perPage = [5, 10, 20];

  const selectPerPage = () => {
    return perPage.map((number) => {
      return <option value={number}>{number}</option>;
    });
  };

  return (
    <nav className="d-flex justify-content-between align-items-center">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a href="!#" className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
      <select onChange={(e) => setPostsPerPage(e.target.value)}>
        <option value="">Posts per page</option>
        {selectPerPage()}
      </select>
    </nav>
  );
};
