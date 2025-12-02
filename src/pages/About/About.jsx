import React from "react";
import "./about.css";
import SEO from "../../components/SEO";

const About = () => {
  return (
    <main
      className="about-section fw-light text-center d-flex flex-column justify-content-center align-items-center"
      role="main"
    >
      <SEO
        title="About Metatony | MetatonyVerse - Software Developer & Content Creator"
        description="Hi! I'm Metatony, a software developer and content creator sharing stories about coding, anime, movies, and personal journey insights. Follow my work on GitHub."
        name="MetatonyVerse"
        type="profile"
      />

      <section
        className="about-content"
        itemScope
        itemType="https://schema.org/Person"
      >
        <header>
          <h1 className="visually-hidden">About MetatonyVerse</h1>
        </header>

        <div className="card-description">
          <p>Thanks for checking me out 😉</p>

          <div className="social-links mt-3">
            <span>GitHub - </span>
            <a
              className="text-decoration-none"
              target="_blank"
              href="https://github.com/metatony"
              rel="noopener noreferrer"
              itemProp="url"
              aria-label="Visit Metatony's GitHub profile"
            >
              <span itemProp="name">Metatony</span>
            </a>
          </div>
        </div>

        {/* Hidden structured data */}
        <div className="visually-hidden">
          <span itemProp="alternateName">MetatonyVerse</span>
          <span itemProp="jobTitle">Software Developer & Content Creator</span>
          <span itemProp="description">
            A developer sharing stories and ideas about coding, anime, movies,
            and personal journey insights.
          </span>
        </div>
      </section>
    </main>
  );
};

export default About;
