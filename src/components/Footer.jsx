import React from "react";
import "../index.css";

const Footer = () => {
  return (
    <footer className="footer text-center mb-3 fw-light" role="contentinfo">
      <div itemScope itemType="https://schema.org/WebSite">
        <p className="text-black">
          Website built by{" "}
          <span itemProp="author" itemScope itemType="https://schema.org/Person">
            <span itemProp="name">metatony</span>
          </span>
          {" | Designed by "}
          <span itemScope itemType="https://schema.org/Person">
            <span itemProp="name">mohammed</span>
          </span>
        </p>
        
        <p className="d-block mt-2 text-black">
          © {new Date().getFullYear()} MetatonyVerse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
