import { useParams } from "react-router-dom";
import { exercises } from "../components/ExerciseDetail/data";

const Exercises = () => {
  const { id } = useParams();
  const ex = exercises.find((exercise) => exercise.id === Number(id));

  if (!ex) {
    return <p className="text-center mt-20 text-white">این حرکت وجود ندارد.</p>;
  }

  return (
    <div className="lg:mx-20 mt-10  p-4">
      {/* عکس‌ها */}

      {/* عنوان */}
      <h1 className="text-center font-bold  text-black text-xl lg:text-3xl mt-10 mb-10">
        نام حرکت : {ex.title}
      </h1>

      {/* توضیحات */}
      {/* <p className="text-center mt-3 mb-10 text-gray-800 lg:text-lg">
        {ex.description}
      </p> */}
      <div className="grid gap-10 sm:grid-cols-2 sm:mx-auto lg:grid-cols-3">
        {ex.images?.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={ex.title}
            className={`
        h-60 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 lg:h-80
        ${ex.images.length === 3 && index === 2 ? "sm:col-span-2 lg:col-span-1 sm:justify-self-center" : ""}
      `}
          />
        ))}

        <h2
          className="text-2xl m-8  
                  lg:text-lg  // اندازه فونت برای صفحات بزرگتر
               font-normal  // وزن فونت
               text-gray-800 // رنگ متن (کنتراست خوب با پس‌زمینه روشن)
               leading-relaxed // ارتفاع خطوط (فاصله بین خطوط)
               break-words   // شکسته شدن کلمات در صورت نیاز (شبیه word-break: break-word;)
               p-4           // padding داخلی برای فاصله از لبه‌ها
               mt-10         // margin بالا برای فاصله از عناصر بالایی
               mb-10     
        
        "
        >
          {" "}
          <span className="text-4xl"> توضیحات </span>: {ex.description}
        </h2>
      </div>

      <div className="grid  mt-5  xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2">
        <div
          className="mt-8 border-4 border-blue-950
bg-gray-100 p-4 rounded-xl  ml-20 "
        >
          <h3 className="font-bold text-2xl mb-8  text-center ">
            روش صحیح زدن حرکت{" "}
          </h3>
          <ol
            className="list-decimal list-inside
space-y-2 text-black text-md text-lg"
          >
            {ex.executionSteps.map((step, index) => (
              <li key={index} className="">
                {step}
              </li>
            ))}
            ;
          </ol>
        </div>

        <div
          className="mt-8 border-4 border-blue-950
bg-gray-100 p-4 rounded-xl ml-20 "
        >
          <h3 className="font-bold text-2xl mb-10 text-center  ">
            اشتباهات رایج
          </h3>
          <ol
            className="list-decimal list-inside
space-y-2 text-black text-md text-xl"
          >
            {ex.commonMistakes.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
        <div
          className="mt-8 border-4 border-blue-950
bg-gray-100 p-4 rounded-xl  ml-20 "
        >
          <h3 className="font-bold text-2xl mb-8  text-center ">
            نکاتی که باید رعایت کنید{" "}
          </h3>
          <ol
            className="list-decimal list-inside
space-y-2 text-black text-md text-lg"
          >
            {ex.tips.map((step, index) => (
              <li key={index} className="">
                {step}
              </li>
            ))}
            ;
          </ol>
        </div>
        <div
          className="mt-8 border-4 border-blue-950
bg-gray-100 p-4 rounded-xl  ml-20 "
        >
          <h3 className="font-bold text-2xl mb-8  text-center ">فواید </h3>
          <ol
            className="list-decimal list-inside
space-y-2 text-black text-md text-lg"
          >
            {ex.benefits.map((step, index) => (
              <li key={index} className="">
                {step}
              </li>
            ))}
            ;
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Exercises;
