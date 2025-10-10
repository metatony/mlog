import { BrowserRouter, Route, Routes } from "react-router";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./pages/Home/Layout";
import About from "./pages/About/About";
import { HelmetProvider } from "react-helmet-async";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <HelmetProvider>
      <div
        className="centered-content"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog/:id" element={<Blog />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;
