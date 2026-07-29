// import Toast from "../helpers/Toast ";
// import { FaUserPlus } from "react-icons/fa";
// import axios from "axios";
// import { useState } from "react";

// const Singup = () => {
//   const [SignupData, setSignupData] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     phone: "",
//   });

//   const [signupErrors, setSignupErrors] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     phone: "",
//   });

//   const [toast, setToast] = useState<{
//     text: string;
//     status: number | null;
//   }>({
//     text: "",
//     status: null,
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { id, value } = e.target;

//     setSignupData({ ...SignupData, [id]: value });

//     setSignupErrors({ ...signupErrors, [id]: "" });
//   };

//   const validateSignup = () => {
//     const newErrors = {
//       fname: "",
//       lname: "",
//       email: "",
//       phone: "",
//     };

//     if (!SignupData.fname.trim()) {
//       newErrors.fname = "نام الزامی است";
//     }

//     if (!SignupData.lname.trim()) {
//       newErrors.lname = "نام خانوادگی الزامی است";
//     }

//     if (!SignupData.email.trim()) {
//       newErrors.email = "ایمیل الزامی است";
//     }

//     if (!SignupData.phone.trim()) {
//       newErrors.phone = "شماره تماس الزامی است";
//     } else if (SignupData.phone.length !== 11) {
//       newErrors.phone = "شماره تماس باید دقیقاً ۱۱ رقم باشد";
//     }

//     setSignupErrors(newErrors);

//     return Object.values(newErrors).every((error) => error === "");
//   };

//   const showToast = (text: string, status: number) => {
//     setToast({ text, status });

//     setTimeout(() => {
//       setToast({
//         text: "",
//         status: null,
//       });
//     }, 3000);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const isValid = validateSignup();

//     if (!isValid) return;

//     try {
//       const responseServer = await axios.post(
//         "https://jsonplaceholder.typicode.com/posts",
//         {
//           title: SignupData.lname,
//           body: SignupData.fname,
//         },
//       );

//       console.log(responseServer);
//       showToast("ثبت نام با موفقیت انجام شد.", 201);

//       setSignupData({
//         fname: "",
//         lname: "",
//         email: "",
//         phone: "",
//       });
//     } catch {
//       console.log("مشکل ارسال فرم");

//       showToast("ثبت نام انجام نشد. دوباره تلاش کنید.", 500);
//     }
//   };

//   const inputStyle = `
//     rounded-xl
//     p-3
//     border
//     border-borderColor
//     focus:outline-none
//     focus:ring-2
//     focus:ring-primary
//     focus:border-primary
//     duration-200
//   `;

//   return (
//     <div className="bg-background min-h-screen py-10">
//       {toast.status !== null && (
//         <Toast text={toast.text} status={toast.status} />
//       )}
//       <div className="flex justify-center items-center gap-3 mb-20">
//         <FaUserPlus className="text-primary text-4xl" />
//         <h1 className="text-4xl  text-text font-bold mr-3">ثبت نام</h1>
//       </div>
//       <form
//         onSubmit={handleSubmit}
//         className="
//           grid
//           gap-y-5
//           text-center
//           sm:grid-cols-2
//           bg-surface
//           shadow-lg
//           rounded-2xl
//           p-8
//           border
//           border-borderColor
//           max-w-5xl
//           mx-auto
//         "
//       >
//         {/* نام */}
//         <div className="flex flex-col mr-6 ml-6 mb-5">

//           <label

//             htmlFor="fname"
//             className="text-right text-sm text-muted font-medium"
//           >
//             نام:
//             <span className="text-error text-xl">*</span>
//           </label>

//           <input
//             type="text"
//             id="fname"
//             className={inputStyle}
//             onChange={handleChange}
//             value={SignupData.fname}
//           />

//           {signupErrors.fname && (
//             <p className="text-error text-sm text-right mt-1">
//               {signupErrors.fname}
//             </p>
//           )}
//         </div>

//         {/* نام خانوادگی */}
//         <div className="flex flex-col mr-6 ml-6 mb-5">
//           <label
//             htmlFor="lname"
//             className="text-right text-sm text-muted font-medium"
//           >
//             نام خانوادگی:
//             <span className="text-error text-xl">*</span>
//           </label>

//           <input
//             type="text"
//             id="lname"
//             className={inputStyle}
//             onChange={handleChange}
//             value={SignupData.lname}
//           />

//           {signupErrors.lname && (
//             <p className="text-error text-sm text-right mt-1">
//               {signupErrors.lname}
//             </p>
//           )}
//         </div>

//         {/* ایمیل */}
//         <div className="flex flex-col mr-6 ml-6 mb-5">
//           <label
//             htmlFor="email"
//             className="text-right text-sm text-muted font-medium"
//           >
//             ایمیل:
//             <span className="text-error text-xl">*</span>
//           </label>

//           <input
//             type="text"
//             id="email"
//             className={inputStyle}
//             onChange={handleChange}
//             value={SignupData.email}
//           />

//           {signupErrors.email && (
//             <p className="text-error text-sm text-right mt-1">
//               {signupErrors.email}
//             </p>
//           )}
//         </div>

//         {/* شماره تلفن */}
//         <div className="flex flex-col mr-6 ml-6 mb-5">
//           <label
//             htmlFor="phone"
//             className="text-right text-sm text-muted font-medium"
//           >
//             شماره تلفن:
//             <span className="text-error text-xl">*</span>
//           </label>

//           <input
//             type="text"
//             id="phone"
//             className={inputStyle}
//             onChange={handleChange}
//             value={SignupData.phone}
//           />

//           {signupErrors.phone && (
//             <p className="text-error text-sm text-right mt-1">
//               {signupErrors.phone}
//             </p>
//           )}
//         </div>

//         {/* دکمه */}
//         <div className="flex justify-center sm:col-span-full">
//           <button
//             type="submit"
//             className="
//               bg-primary
//               hover:bg-primary-hover
//               text-white
//               font-semibold
//               py-3
//               px-10
//               rounded-xl
//               w-full
//               sm:w-auto
//               shadow-md
//               hover:shadow-lg
//               duration-300
//             "
//           >
//             ثبت نام
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Singup;
import Toast from "../helpers/Toast ";
import { FaUserPlus } from "react-icons/fa";
import axios from "axios";
import {  useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { signupSchema, SignupForm } from "../validations/signupSchema";

const Signup = () => {
  const [toast, setToast] = useState<{
    text: string;
    status: number | null;
  }>({
    text: "",
    status: null,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignupForm>({
    resolver: yupResolver(signupSchema),

    defaultValues: {
      fname: "",
      lname: "",
      email: "",
      phone: "",
    },
  });

  const showToast = (text: string, status: number) => {
    setToast({ text, status });

    setTimeout(() => {
      setToast({
        text: "",
        status: null,
      });
    }, 3000);
  };

  const onSubmit = async (data: SignupForm) => {
    try {
      const responseServer = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: data.lname,
          body: data.fname,
          email: data.email,
          phone: data.phone,
        },
      );

      console.log(responseServer);

      showToast("ثبت نام با موفقیت انجام شد.", 201);

      reset();
    } catch {
      showToast("ثبت نام انجام نشد. دوباره تلاش کنید.", 500);
    }
  };

  const inputStyle = `
    rounded-xl
    p-3
    border
    border-borderColor
    focus:outline-none
    focus:ring-2
    focus:ring-primary
    focus:border-primary
    duration-200
  `;
  

  

  return (
    <div className="bg-background min-h-screen py-10">
      {toast.status !== null && (
        <Toast text={toast.text} status={toast.status} />
      )}

      <div className="flex justify-center items-center gap-3 mb-20">
        <FaUserPlus className="text-primary text-4xl" />
        <h1 className="text-4xl text-text font-bold mr-3">ثبت نام</h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
          grid
          gap-y-5
          text-center
          sm:grid-cols-2
          bg-surface
          shadow-lg
          rounded-2xl
          p-8
          border
          border-borderColor
          max-w-5xl
          mx-auto
        "
      >
        {/* نام */}

        <div className="flex flex-col mr-6 ml-6 mb-5">
          <label
            htmlFor="fname"
            className="text-right text-sm text-muted font-medium"
          >
            نام
            <span className="text-error text-xl">*</span>
          </label>

          <input
            
            id="fname"
            type="text"
            className={inputStyle}
            {...register("fname")}
          />

          {errors.fname && (
            <p className="text-error text-sm text-right mt-1">
              {errors.fname.message}
            </p>
          )}
        </div>

        {/* نام خانوادگی */}

        <div className="flex flex-col mr-6 ml-6 mb-5">
          <label
            htmlFor="lname"
            className="text-right text-sm text-muted font-medium"
          >
            نام خانوادگی
            <span className="text-error text-xl">*</span>
          </label>

          <input
            id="lname"
            type="text"
            className={inputStyle}
            {...register("lname")}
          />

          {errors.lname && (
            <p className="text-error text-sm text-right mt-1">
              {errors.lname.message}
            </p>
          )}
        </div>

        {/* ایمیل */}

        <div className="flex flex-col mr-6 ml-6 mb-5">
          <label
            htmlFor="email"
            className="text-right text-sm text-muted font-medium"
          >
            ایمیل
            <span className="text-error text-xl">*</span>
          </label>

          <input
            id="email"
            type="text"
            className={inputStyle}
            {...register("email")}
          />

          {errors.email && (
            <p className="text-error text-sm text-right mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* شماره تلفن */}

        <div className="flex flex-col mr-6 ml-6 mb-5">
          <label
            htmlFor="phone"
            className="text-right text-sm text-muted font-medium"
          >
            شماره تلفن
            <span className="text-error text-xl">*</span>
          </label>

          <input
            id="phone"
            type="text"
            className={inputStyle}
            {...register("phone")}
          />

          {errors.phone && (
            <p className="text-error text-sm text-right mt-1">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* دکمه */}

        <div className="flex justify-center sm:col-span-full">
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              bg-primary
              hover:bg-primary-hover
              text-white
              font-semibold
              py-3
              px-10
              rounded-xl
              w-full
              sm:w-auto
              shadow-md
              hover:shadow-lg
              duration-300
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {isSubmitting ? "در حال ارسال..." : "ثبت نام"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
