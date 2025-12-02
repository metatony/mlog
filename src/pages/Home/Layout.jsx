import React from "react";
import "./layout.css";

import SectionOne from "./sections/SectionOne";
import SectionTwo from "./sections/SectionTwo";
import SectionThree from "./sections/SectionThree";
import SEO from "../../components/SEO";

const Layout = () => {
  return (
    <main className="container" role="main">
      <SEO
        title="Stories & Ideas | MetatonyVerse"
        description="A mix of my thoughts on coding, animes, movies, and sharing stories and ideas from my journey."
        name="MetatonyVerse"
        type="website"
      />

      {/* Hero header section */}
      <header>
        <SectionOne />
      </header>

      {/* Featured content section */}
      <section aria-labelledby="featured-content">
        <SectionTwo />
      </section>

      {/* Additional articles section */}
      <section aria-labelledby="more-articles">
        <SectionThree />
      </section>
    </main>
  );
};

export default Layout;
