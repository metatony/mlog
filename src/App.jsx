import { BrowserRouter, Route, Routes } from "react-router";
import { GlobalProvider } from "./provider/GlobalProvider";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./pages/Home/Layout";

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
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </GlobalProvider>
  );
}

export default App;
