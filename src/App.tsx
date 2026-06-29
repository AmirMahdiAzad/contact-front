import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
// import ContactUs from "./pages/ContactUs";
import NotFoundPage from "./pages/NotFoundPage";
import Shoppingcart from "./pages/Shoppingcart";
import Products from "./pages/Products";
import Exercises from "./pages/Exercises";
import Coaches from "./pages/Coaches";
import ContactUs from "./pages/ContactUs";
import Singup from "./pages/Signup ";
// import NotFoundPage from "../pages/NotFoundPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Coaches-us" element={<Coaches />} />
      <Route path="/Contact-us" element={<ContactUs />} />
      <Route path="/Shoppingcart" element={<Shoppingcart />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Singup" element={<Singup />} />

      <Route path="/exercises/:id" element={<Exercises />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
