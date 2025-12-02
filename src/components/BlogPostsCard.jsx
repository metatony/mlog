import React from "react";

const BlogPostsCard = ({ featuredImage, title, slug, date }) => {
  function formatDate(dateString) {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(dateString));
  }

  const truncatedSlug =
    slug?.length > 145 ? slug.substring(0, 145) + "..." : slug;
  const isoDate = new Date(date).toISOString();

  return (
    <article
      className="d-flex flex-column gap-2 gap-md-3 mb-3"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      {/* Featured image */}
      <figure className="featured-image-container rounded-2">
        <img
          src={featuredImage}
          alt={`Featured image for ${title}`}
          className="featured-image rounded-2"
          itemProp="image"
          loading="lazy"
        />
      </figure>

      {/* Article metadata */}
      <div className="blog-description-date">
        <span itemProp="author" itemScope itemType="https://schema.org/Person">
          <span itemProp="name">Metatony</span>
        </span>
        {" | "}
        <time itemProp="datePublished" dateTime={isoDate}>
          {formatDate(date)}
        </time>
      </div>

      {/* Article content */}
      <header>
        <h3 className="card-title lh-lg" itemProp="headline">
          {title}
        </h3>
      </header>

      <div className="card-description fw-light lh-lg" itemProp="description">
        {truncatedSlug}
      </div>
    </article>
  );
};

export default BlogPostsCard;
