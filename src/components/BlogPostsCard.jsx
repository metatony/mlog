import React from "react";

const BlogPostsCard = ({ featuredImage, title, slug, date }) => {
  function formatDate(dateString) {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(dateString));
  }

  return (
    <article className="d-flex flex-column gap-2 gap-md-3">
      <img
        src={featuredImage}
        alt={title + " image"}
        className="featured-image rounded-2"
      />
      <p className="blog-description-date fw-light">Metatony • {formatDate(date)}</p>
      <p className="card-title lh-lg">{title}</p>
      <p className="card-description fw-light lh-lg">
        {slug?.length > 135 ? slug.substring(0, 135) + "..." : slug}
      </p>
    </article>
  );
};

export default BlogPostsCard;
