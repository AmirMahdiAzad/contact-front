import { Link } from "react-router-dom";
import { exercises } from "./ExerciseDetail/data";

const SportEdu = () => {
  return (
    <div className="mx-5 2xl:mx-52 ">
      <h1 className="text-center my-10 text-xl md:text-3xl font-bold text-slate-900">
        آموزش حرکات بدن سازی
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-5">
        {exercises.map((ex) => (
          <div
            key={ex.id}
            className="border-4 border-slate-400 rounded-3xl hover:shadow-2xl bg-slate-100"
          >
            <img
              src={ex.image}
              className="rounded-t-3xl w-full h-52 transition-transform duration-300 hover:scale-105"
            />

            <p className="text-center py-2 font-bold text-slate-900">
              {ex.title}
            </p>

            <div className="flex gap-4 items-center justify-center mb-5 ">
              <Link to={`/exercises/${ex.id}`}>
                <button
                  type="button"
                  className="bg-slate-900 px-3 py-1 rounded text-slate-100 text-sm hover:bg-emerald-600 transition-all"
                >
                  مشاهده این حرکت
                </button>
              </Link>

              <button
                type="button"
                className="bg-slate-900 px-3 py-1 rounded text-slate-100 text-sm hover:bg-emerald-600 transition-all"
              >
                مشاهده همه حرکات
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportEdu;
