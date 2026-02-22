import { Link } from "react-router-dom";

const SportEdu = () => {
  return (
    <div className="mx-5 2xl:mx-52 ">
      <h1 className="text-center my-10 text-xl md:text-3xl font-bold text-white">
        آموزش حرکات بدن سازی
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-5">
        <div className=" border-4 rounded-3xl hover:shadow-2xl bg-white/70">
          <img
            src="/images/SportEdu/edu1.jpg"
            className="rounded-t-3xl w-full h-52"
          />
          <p className="text-center py-2 font-bold"> اسکات پا</p>
          <div className="flex gap-4 items-center justify-center mb-5">
            <Link to={"/skot"}>
              <button
                type="button"
                className=" bg-sky-800 px-3 py-1 rounded text-white text-sm hover:bg-sky-950 transition-all"
              >
                مشاهده این حرکت
              </button>
            </Link>

            <button
              type="button"
              className=" bg-sky-800 px-3 py-1 rounded text-white text-sm hover:bg-sky-950 transition-all"
            >
              مشاهده همه حرکات
            </button>
          </div>
        </div>
        <div className=" border-4 rounded-3xl hover:shadow-2xl bg-white/70">
          <img
            src="/images/SportEdu/edu2.webp"
            className="rounded-t-3xl w-full h-52"
          />
          <p className="text-center py-2 font-bold"> پرس سینه</p>
          <div className="flex gap-4 items-center justify-center mb-5">
            <button
              type="button"
              className=" bg-sky-800 px-3 py-1 rounded text-white text-sm hover:bg-sky-950 transition-all"
            >
              مشاهده این حرکت
            </button>
            <button
              type="button"
              className=" bg-sky-800 px-3 py-1 rounded text-white text-sm hover:bg-sky-950 transition-all"
            >
              مشاهده همه حرکات
            </button>
          </div>
        </div>{" "}
        <div className=" border-4 rounded-3xl hover:shadow-2xl bg-white/70">
          <img
            src="/images/SportEdu/edu3.png"
            className="rounded-t-3xl w-full h-52"
          />
          <p className="text-center py-2 font-bold"> جلو بازو</p>
          <div className="flex gap-4 items-center justify-center mb-5">
            <button
              type="button"
              className=" bg-sky-800 px-3 py-1 rounded text-white text-sm hover:bg-sky-950 transition-all"
            >
              مشاهده این حرکت
            </button>
            <button
              type="button"
              className=" bg-sky-800 px-3 py-1 rounded text-white text-sm hover:bg-sky-950 transition-all"
            >
              مشاهده همه حرکات
            </button>
          </div>
        </div>
        <div className=" border-4 rounded-3xl hover:shadow-2xl bg-white/70">
          <img
            src="/images/SportEdu/edu4.jpg"
            className="rounded-t-3xl w-full h-52"
          />
          <p className="text-center py-2 font-bold"> سرشانه نشر از بغل</p>
          <div className="flex gap-4 items-center justify-center mb-5">
            <button
              type="button"
              className=" bg-sky-800 px-3 py-1 rounded text-white text-sm hover:bg-sky-950 transition-all"
            >
              مشاهده این حرکت
            </button>
            <button
              type="button"
              className=" bg-sky-800 px-3 py-1 rounded text-white text-sm hover:bg-sky-950 transition-all"
            >
              مشاهده همه حرکات
            </button>
          </div>
        </div>{" "}
        <div className=" border-4 rounded-3xl hover:shadow-2xl bg-white/70">
          <img
            src="/images/SportEdu/edu5.webp"
            className="rounded-t-3xl w-full h-52"
          />
          <p className="text-center py-2 font-bold"> بارفیکس</p>
          <div className="flex gap-4 items-center justify-center mb-5">
            <button
              type="button"
              className=" bg-sky-800 px-3 py-1 rounded text-white text-sm hover:bg-sky-950 transition-all"
            >
              مشاهده این حرکت
            </button>
            <button
              type="button"
              className=" bg-sky-800 px-3 py-1 rounded text-white text-sm hover:bg-sky-950 transition-all"
            >
              مشاهده همه حرکات
            </button>
          </div>
        </div>{" "}
        <div className=" border-4 rounded-3xl hover:shadow-2xl bg-white/70">
          <img
            src="/images/SportEdu/edu6.jpg"
            className="rounded-t-3xl w-full h-52"
          />
          <p className="text-center py-2 font-bold">پارالل</p>
          <div className="flex gap-4 items-center justify-center mb-5">
            <button
              type="button"
              className=" bg-sky-800 px-3 py-1 rounded text-white text-sm hover:bg-sky-950 transition-all"
            >
              مشاهده این حرکت
            </button>
            <button
              type="button"
              className=" bg-sky-800 px-3 py-1 rounded text-white text-sm hover:bg-sky-950 transition-all"
            >
              مشاهده همه حرکات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SportEdu;
