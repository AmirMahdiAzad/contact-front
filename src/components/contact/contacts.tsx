import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <header className="flex flex-wrap bg-primary border-b-2 border-secondary justify-around items-center p-2 md:flex-nowrap md:justify-between">
      {/* در سایز موبایل، لینک‌ها ممکن است زیر هم بیایند و برای دسکتاپ در یک ردیف باشند */}

      <Link
        to={"/contact-us"}
        className="text-white hover:bg-secondary hover:text-black hover:p-3 hover:rounded-lg cursor-pointer transition-all text-sm px-2 py-1 md:text-base md:px-3 md:py-2 m-1 md:m-0"
      >
        تماس با ما
      </Link>

      <Link
        to={"Products"}
        className="text-white hover:bg-secondary hover:text-black hover:p-3 hover:rounded-lg cursor-pointer transition-all text-sm px-2 py-1 md:text-base md:px-3 md:py-2 m-1 md:m-0"
      >
        <p>محصولات</p>
      </Link>

      <Link
        to={"/Shoppingcart"}
        className="text-white hover:bg-secondary hover:text-black hover:p-3 hover:rounded-lg cursor-pointer transition-all text-sm px-2 py-1 md:text-base md:px-3 md:py-2 m-1 md:m-0"
      >
        <p>سبد خرید</p>
      </Link>

      <Link
        to={"/Singup"}
        className="text-white hover:bg-secondary hover:text-black hover:p-3 hover:rounded-lg cursor-pointer transition-all text-sm px-2 py-1 md:text-base md:px-3 md:py-2 m-1 md:m-0"
      >
        <p>ثبت نام</p>
      </Link>

      <Link
        to={"/Coaches-us"}
        className="text-white hover:bg-secondary hover:text-black hover:p-3 hover:rounded-lg cursor-pointer transition-all text-sm px-2 py-1 md:text-base md:px-3 md:py-2 m-1 md:m-0"
      >
        مربیان بین المللی
      </Link>
<Link
to={"/"}
>
      <img src="/images/logo.png" className="w-16 h-16 m-1 md:m-0" alt="Logo"  />
</Link>
    </header>
  );
};

export default Contacts;
