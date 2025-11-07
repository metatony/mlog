import React from "react";

const FeaturedStoryCard = ({ featuredImage, title, slug }) => {
  return (
    <article className="d-flex flex-column gap-2 gap-md-3">
      <img
        src={featuredImage}
        // alt={" image"}
        className="featured-image rounded-2 "
      />

      <h2 className="card-title lh-lg mt-4">{title}</h2>
      <p className="card-description fw-light lh-lg">
        {slug?.length > 145 ? slug.substring(0, 145) + "..." : slug}
      </p>
    </article>
  );
};

export default FeaturedStoryCard;
