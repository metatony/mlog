import React from "react";

const FeaturedStoryCard = ({ featuredImage, title, slug }) => {
  return (
    <article className="d-flex flex-column gap-2 gap-md-3">
      <div className="featured-image-container rounded-2">
        <img
          src={featuredImage}
          alt={title}
          className="featured-image"
        />
      </div>

      <h2 className="card-title lh-lg mt-3">{title}</h2>
      <p className="card-description fw-light lh-lg">
        {slug?.length > 145 ? slug.substring(0, 145) + "..." : slug}
      </p>
    </article>
  );
};

export default FeaturedStoryCard;
