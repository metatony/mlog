import React from "react";

const FeaturedStoryCard = (props) => {
  return (
    <article className="d-flex flex-column gap-3 col">
      <img
        src={props.featuredImage}
        alt="mount fiji tower with beautiful blue sky"
        className="featured-image rounded-2 "
      />

      <h2 className="card-title lh-sm">{props.title}</h2>
      <p className="card-description fw-light">{props.slug}</p>
    </article>
  );
};

export default FeaturedStoryCard;

// display-4 display-md-5
