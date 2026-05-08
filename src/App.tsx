import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NotFoundPage from "./pages/NotFoundPage";
import Shoppingcart from "./pages/Shoppingcart";
import Products from "./pages/Products";
import Exercises from "./pages/Exercises";
// import NotFoundPage from "../pages/NotFoundPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/Shoppingcart" element={<Shoppingcart />} />
      <Route path="/Products" element={<Products />} />

      <Route path="/exercises/:id" element={<Exercises />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
