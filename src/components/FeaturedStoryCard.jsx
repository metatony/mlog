import React from "react";

const FeaturedStoryCard = ({ featuredImage, title, slug }) => {
  const truncatedSlug = slug?.length > 145 ? slug.substring(0, 145) + "..." : slug;
  
  return (
    <article 
      className="d-flex flex-column gap-2 gap-md-3" 
      itemScope 
      itemType="https://schema.org/BlogPosting"
    >
      {/* Featured image */}
      <figure className="featured-image-container rounded-2">
        <img
          src={featuredImage}
          alt={`Featured image for ${title}`}
          className="featured-image"
          itemProp="image"
          loading="lazy"
        />
      </figure>

      {/* Article content */}
      <header>
        <h2 className="card-title lh-lg mt-3" itemProp="headline">
          {title}
        </h2>
      </header>
      
      <div className="card-description fw-light lh-lg" itemProp="description">
        {truncatedSlug}
      </div>
      
      {/* Hidden structured data */}
      <div className="visually-hidden">
        <span itemProp="author" itemScope itemType="https://schema.org/Person">
          <span itemProp="name">MetatonyVerse</span>
        </span>
        <time itemProp="datePublished" dateTime={new Date().toISOString()}>
          {new Date().toLocaleDateString()}
        </time>
      </div>
    </article>
  );
};

export default FeaturedStoryCard;
