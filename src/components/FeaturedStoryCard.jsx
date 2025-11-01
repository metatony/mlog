import React from "react";

const FeaturedStoryCard = ({ featuredImage, title, slug }) => {
  return (
    <article className="d-flex flex-column gap-3 col">
      <img
        src={featuredImage}
        // alt={" image"}
        className="featured-image rounded-2 "
      />

      <h2 className="card-title lh-lg lh-md-base">{title}</h2>
      <p className="card-description fw-light lh-lg">
        {slug?.length > 135 ? slug.substring(0, 135) + "..." : slug}
      </p>
    </article>
  );
};

export default FeaturedStoryCard;
