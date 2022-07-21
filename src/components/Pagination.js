import React from "react";

const Pagination = ({
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

  const handleChange = (e) => {
    setPostsPerPage(e.target.value);
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
      <select onChange={handleChange}>
        <option value="">Posts per page</option>
        {selectPerPage()}
      </select>
    </nav>
  );
};

export default Pagination;
