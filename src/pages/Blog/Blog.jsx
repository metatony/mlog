import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useContentful from "../../custom-hooks/useContentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SEO from "../../components/SEO";
import "../../index.css";

const Blog = () => {
  const [data, setData] = useState([]);
  const { getBlogPosts } = useContentful();
  const { id } = useParams();

  useEffect(() => {
    getBlogPosts().then((response) => setData(response));
  }, []);

  const blogPage = data.find((item) => item.id.toString() === id);

  return (
    <main className="container my-5" role="main">
      <SEO
        title={`${blogPage?.title} | MetatonyVerse Blog`}
        description={blogPage?.slug}
        name="MetatonyVerse"
        type="article"
      />
      
      <article 
        className="d-flex flex-column"
        itemScope 
        itemType="https://schema.org/BlogPosting"
      >
        {/* Article header */}
        <header className="mb-4 text-center">
          <h1 className="card-title lh-lg" itemProp="headline">
            {blogPage?.title}
          </h1>
          
          {/* Article metadata */}
          <div className="mt-3 text-muted blog-publish-info" >
            <span className="">
              By{" "}
              <span itemProp="author" itemScope itemType="https://schema.org/Person">
                <span itemProp="name">Metatony</span>
              </span>
                 {" | "}
            </span>
            {blogPage?.date && (
              <time itemProp="datePublished" dateTime={new Date(blogPage.date).toISOString()}>
                {new Date(blogPage.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            )}
          </div>
        </header>

        {/* Featured image */}
        {blogPage?.featuredImage && (
          <figure className="d-sm-none featured-image-container overflow-hidden rounded-2 mb-4">
            <img
              className="d-sm-none featured-image"
              src={blogPage.featuredImage}
              alt={`Featured image for ${blogPage.title}`}
              itemProp="image"
              loading="lazy"
            />
          </figure>
        )}

        {/* Article content */}
        <div 
          className="blog-page-description fw-light lh-lg mt-5 mt-sm-5"
          itemProp="articleBody"
        >
          {documentToReactComponents(blogPage?.richText)}
        </div>

        {/* Hidden structured data */}
        <div className="visually-hidden">
          <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
            <span itemProp="name">MetatonyVerse</span>
            <span itemProp="url">https://metatonyverse.com</span>
          </span>
          {blogPage?.date && (
            <time itemProp="dateModified" dateTime={new Date(blogPage.date).toISOString()}>
              {new Date(blogPage.date).toISOString()}
            </time>
          )}
        </div>
      </article>
    </main>
  );
};

export default Blog;
