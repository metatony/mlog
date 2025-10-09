import React from "react";

const FeaturedStoryCard = ({ featuredImage, title, slug }) => {
  return (
    <article className="d-flex flex-column gap-3 col">
      <img
        src={featuredImage}
        alt="mount fiji tower with beautiful blue sky"
        className="featured-image rounded-2 "
      />

      <h2 className="card-title lh-sm">{title}</h2>
      <p className="card-description fw-light">
        {slug?.length > 135 ? slug.substring(0, 135) + "..." : slug}
      </p>
    </article>
  );
};

export default FeaturedStoryCard;

// display-4 display-md-5
