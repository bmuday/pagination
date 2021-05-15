import React, { Fragment } from "react";

export const Posts = ({ posts, loading }) => {
  if (loading) {
    return (
      <Fragment>
        <h2>Loading...</h2>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <ul className="list-group mb-4">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
