import React from "react";

const TopStoriesCard = ({ title, featuredImage, date, index }) => {
  const blogCount = index + 1;

  return (
    <article className="" itemScope itemType="https://schema.org/BlogPosting">
      <div className="d-flex flex-row align-items-start justify-content-between gap-3">
        <div className="d-flex flex-row gap-3">
          {/* blog rank indicator */}
          <div 
            className="blog-count d-none d-md-flex align-items-center justify-content-center rounded-circle"
            role="img"
            aria-label={`Article ${blogCount} in top stories`}
          >
            {blogCount}
          </div>

          {/* blog content */}
          <header className="blog-description">
            <h3 className="blog-description-title lh-lg" itemProp="headline">
              {title}
            </h3>
            <div className="blog-description-date">
              <span itemProp="author" itemScope itemType="https://schema.org/Person">
                <span itemProp="name">Metatony</span>
              </span>
              {" | "}
              <time itemProp="datePublished" dateTime={new Date(date).toISOString()}>
                {date}
              </time>
            </div>
          </header>
        </div>

        {/* blog featured image */}
        <figure className="thumbnail-image-container rounded-2">
          <img
            src={featuredImage}
            alt={`Featured image for ${title}`}
            className="thumbnail-image"
            itemProp="image"
            loading="lazy"
          />
        </figure>
      </div>
      <hr className="border-line border-1" role="separator" />
    </article>
  );
};

export default TopStoriesCard;
