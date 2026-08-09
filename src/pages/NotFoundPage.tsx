import { FaHandPointDown } from "react-icons/fa";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function NotFound() {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const rejectedSearch = location.state?.fromSearch;

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchValue.trim() !== "") {
      const targetPath = searchValue.startsWith("/")
        ? searchValue
        : `/${searchValue}`;

      navigate(targetPath, {
        state: { fromSearch: searchValue },
      });
    }
  };

  return (
    <div
      className="
        min-h-screen
        bg-background
        flex
        flex-col
        items-center
        justify-center
        p-4
        text-center
      "
    >
      <img
        src="/images/404-error.jpg"
        alt="404 Not Found"
        className="w-96 mb-10"
      />

      <p className="text-text text-lg mb-8">
        نام صفحه‌ای که دنبالش هستید را اینجا تایپ کنید و Enter بزنید:
      </p>

      <input
        type="text"
        dir="rtl"
        placeholder="مثلاً: about-us یا contact-us"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleSearch}
        className="
          w-full
          max-w-md
          p-3
          rounded-xl
          border-2
          border-borderColor
          bg-surface
          text-text
          shadow-md
          transition-all
          duration-300
          text-right
          focus:outline-none
          focus:ring-2
          focus:ring-primary
          focus:border-primary
        "
      />

      {rejectedSearch && (
        <>
          <p
            className="
              mt-5
              px-5
              py-3
              rounded-xl
              bg-error/10
              text-error
              shadow-md
            "
          >
            آدرس "{rejectedSearch}" پیدا نشد 😕
          </p>

          <div className="flex items-center gap-2 mt-6 mb-4 text-text">
            <p>صفحات موجود سایت:</p>
            <FaHandPointDown className="text-secondary" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Link
              className="text-secondary hover:text-secondary-hover hover:underline duration-300"
              to="/contact-us"
            >
              Contact Us
            </Link>

            <Link
              className="text-secondary hover:text-secondary-hover hover:underline duration-300"
              to="/products"
            >
              Products
            </Link>

            <Link
              className="text-secondary hover:text-secondary-hover hover:underline duration-300"
              to="/shoppingcart"
            >
              Shopping Cart
            </Link>

            <Link
              className="text-secondary hover:text-secondary-hover hover:underline duration-300"
              to="/skot"
            >
              Skot
            </Link>

            <Link
              className="text-secondary hover:text-secondary-hover hover:underline duration-300"
              to="/about-us"
            >
              About Us
            </Link>

            <Link
              className="text-secondary hover:text-secondary-hover hover:underline duration-300"
              to="/profile"
            >
              Profile
            </Link>
          </div>
        </>
      )}

      <Link
        to="/"
        className="
          mt-10
          px-6
          py-3
          rounded-xl
          bg-primary
          text-white
          hover:bg-primary-hover
          duration-300
          shadow-md
        "
      >
        برگشت به صفحه اصلی
      </Link>
    </div>
  );
}