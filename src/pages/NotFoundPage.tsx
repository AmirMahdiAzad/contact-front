// import React, { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHandPointDown } from "react-icons/fa";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function NotFound() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location =>", location);
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
    <div className="flex flex-col items-center justify-center h-screen p-4 text-center">
      <img src="/images/404-error.jpg" className="w-96 mb-10" />

      <p className="text-gray-950 mb-8 text-lg">
        نام صفحه‌ای که دنبالش هستید رو اینجا تایپ کنید و Enter بزنید:
      </p>

      <input
        type="text"
        placeholder="مثلاً: about یا contact"
        className="w-full max-w-md p-3 border-2 border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-right"
        dir="rtl"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleSearch}
      />

      {rejectedSearch && (
        <>
          <p className="mt-4 px-4 py-2 bg-red-100 text-red-700 rounded-lg shadow">
            آدرس "{rejectedSearch}" پیدا نشد 😕
          </p>

          <div className="flex items-center gap-2 mt-5 mb-3">
            <p>ادرس های سایت ما صفحات زیر است</p>
            <FaHandPointDown />
          </div>
          <div className="grid grid-cols-3  gap-2">
            <Link
              className="text-blue-50 hover:underline hover:text-blue-950 "
              to={"contact-us"}
            >
              Contact us
            </Link>
            <Link
              className="text-blue-50 hover:underline hover:text-blue-950 "
              to={"Products"}
            >
              Products
            </Link>
            <Link
              className="text-blue-50 hover:underline hover:text-blue-950 "
              to={"Shoppingcart"}
            >
              shopping
            </Link>
            <Link
              className="text-blue-50 hover:underline hover:text-blue-950 "
              to={"Skot"}
            >
              Skot
            </Link>
            <Link
              className="text-blue-50 hover:underline hover:text-blue-950 "
              to={"about-us"}
            >
              AboutUs
            </Link>
            <Link
              className="text-blue-50 hover:underline hover:text-blue-950 "
              to={"Profile"}
            >
              Profile
            </Link>
          </div>
        </>
      )}

      <Link
        to={"/"}
        className="mt-8 text-blue-50 hover:underline hover:text-blue-950 "
      >
        برگشت به صفحه‌ی اصلی
      </Link>
    </div>
  );
}
