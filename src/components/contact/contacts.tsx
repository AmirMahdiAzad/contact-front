import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <header className="flex bg-gray-800 justify-around items-center p-2">
      <Link
        to={"/contact-us"}
        className="text-white hover:border-green-800-2 hover:bg-green-500  hover:p-3 hover:rounded-lg cursor-pointer transition-all "
      >
        تماس با ما
      </Link>
      <Link
        to={"Products"}
        className="text-white hover:border-green-800-2 hover:bg-green-500 hover:p-3 hover:rounded-lg cursor-pointer transition-all"
      >
        <p>محصولات</p>
      </Link>

      <Link
        to={"/Shoppingcart"}
        className="text-white hover:border-green-800-2 hover:bg-green-500 hover:p-3 hover:rounded-lg cursor-pointer transition-all"
      >
        <p>سبد خرید</p>
      </Link>
      <Link
        to={"/Profile"}
        className="text-white hover:border-green-800-2 hover:bg-green-500 hover:p-3 hover:rounded-lg cursor-pointer transition-all"
      >
        <p>پروفایل</p>
      </Link>

      <Link
        to={"/Coaches-us"}
        className="text-white hover:border-green-800-2 hover:bg-green-500 hover:p-3 hover:rounded-lg cursor-pointer transition-all"
      >
        مربیان بین المللی
      </Link>

      <img src="/images/logo.png" className="w-16 h-16" />
    </header>
  );
};

export default Contacts;
