import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div className="flex bg-gray-700 justify-around items-center p-2">
      <Link
        to={"/contact-us"}
        className="text-white hover:text-red-600 cursor-pointer transition-all "
      >
        تماس با ما
      </Link>
      <Link
        to={"Products"}
        className="text-white hover:text-red-600 cursor-pointer transition-all"
      >
        <p>محصولات</p>
      </Link>

      <Link
        to={"/Shoppingcart"}
        className="text-white hover:text-red-600 cursor-pointer transition-all"
      >
        <p>سبد خرید</p>
      </Link>
      <Link
        to={"/Profile"}
        className="text-white hover:text-red-600 cursor-pointer transition-all"
      >
        <p>پروفایل</p>
      </Link>

      <Link
        to={"/about-us"}
        className="text-white hover:text-red-600 cursor-pointer transition-all"
      >
        درباره ما
      </Link>

      <img src="/images/logo.png" className="w-16 h-16" />
    </div>
  );
};

export default Contacts;
