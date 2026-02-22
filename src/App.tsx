import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Skot from "./pages/Skot";
import NotFoundPage from "./pages/NotFoundPage";
// import NotFoundPage from "../pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/skot" element={<Skot />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
