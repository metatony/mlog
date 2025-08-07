import { BrowserRouter, Route, Routes } from "react-router";
import { GlobalProvider } from "./provider/GlobalProvider";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./pages/Home/Layout";
import About from "./pages/About/About";

function App() {
  return (
    <GlobalProvider>
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
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </GlobalProvider>
  );
}

export default App;
