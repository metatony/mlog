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
    <article className="d-flex flex-column gap-2 gap-md-3 mt-3 col">
      <img
        src={featuredImage}
        alt="image of highroad traffic during sunset"
        className="featured-image rounded-2 h-50"
      />
      <p className="card-header fw-light">Metatony | {formatDate(date)}</p>
      <p className="card-title lh-sm">{title}</p>
      <p className="card-description fw-light">
        {slug?.length > 135 ? slug.substring(0, 135) + "..." : slug}
      </p>
    </article>
  );
};

export default BlogPostsCard;
