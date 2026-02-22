import { Link, useNavigate } from "react-router-dom";

const Contacts = () => {
  const navigate = useNavigate();

  const handleProfile = () => {
    const result = window.confirm("مطمئنی که میخوای به صفحه پروفایلت بری ؟؟؟");
    if (result) {
      navigate("/profile");
    }
  };

  return (
    <div className="flex bg-gray-700 justify-around items-center p-2">
      <Link
        to={"/contact-us"}
        className="text-white hover:text-red-600 cursor-pointer transition-all "
      >
        تماس با ما
      </Link>

      <p className="text-white hover:text-red-600 cursor-pointer transition-all">
        محصولات
      </p>

      <p className="text-white hover:text-red-600 cursor-pointer transition-all">
        سبد خرید
      </p>

      <p
        onClick={handleProfile}
        className="text-white hover:text-red-600 cursor-pointer transition-all"
      >
        پروفایل
      </p>

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
