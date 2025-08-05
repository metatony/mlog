import React from "react";

const BlogPostsCard = (props) => {
  return (
    <div class="d-flex flex-column gap-2 gap-md-3 mt-3 col">
      <img src={props.image} alt="" className="d-none d-md-block rounded-2" />
      <img src={props.image} alt="" className="d-block d-md-none rounded-2" />
      <p className="card-header fw-light">{props.author}</p>
      <p className="card-title ">{props.title}</p>
      <p className="card-description fw-light">{props.description}</p>
    </div>
  );
};

export default BlogPostsCard;
