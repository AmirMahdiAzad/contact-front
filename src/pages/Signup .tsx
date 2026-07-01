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

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     const { id, value } = e.target;
//     console.log("cheng");
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

//     if (!SignupData.email.trim()) newErrors.email = "ایمیل الزامی است";
//     if (!SignupData.fname.trim()) newErrors.fname = "  نام الزامی است";
//     if (!SignupData.lname.trim())
//       newErrors.lname = "   نام خانوادگی الزامی است";
//     if (!SignupData.phone.trim()) {
//       newErrors.phone = "شماره تماس الزامی است";
//     } else if (SignupData.phone.length !== 11) {
//       newErrors.phone = "شماره تماس باید دقیقاً ۱۱ رقم باشد";
//     }
//     setSignupErrors(newErrors);

//     return Object.values(newErrors).every((error) => error === "");
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
//       console.log("response from server === ", responseServer);
//       // showToast("پیام شما با موفقیت ارسال شد!", 201);
//       setSignupData({
//         fname: "",
//         lname: "",
//         email: "",
//         phone: "",
//       });
//     } catch {
//       console.log("مشکل ارسال فرم");
//       // showToast("خطا در ارسال پیام، لطفاً دوباره تلاش کنید.", 500);
//     }
//   };

//   return (
//     <div>
//       <h1 className="text-4xl text-center mt-10">ثبت نام </h1>
//       <form
//         onSubmit={handleSubmit}
//         action=""
//         className="grid gap-y-5 text-center my-10 mx-8 rounded-xl sm:grid-cols-2"
//       >
//         {/* first input */}

//         <div className="flex flex-col mr-6 ml-6 mb-5">
//           <label htmlFor="fname" className="text-right text-sm">
//             نام: <span className="text-red-600 text-xl">*</span>
//           </label>
//           <input
//             type="text"
//             id="fname"
//             className="rounded-lg p-3 border"
//             onChange={handleChange}
//             value={SignupData.fname}
//           />
//           {signupErrors.fname && (
//             <p className="text-red-600 text-sm text-right mt-1">
//               {signupErrors.fname}
//             </p>
//           )}
//         </div>

//         {/* second input */}

//         <div className="flex flex-col mr-6 ml-6 mb-5">
//           <label htmlFor="lname" className="text-right text-sm">
//             نام خانوادگی:<span className="text-red-600 text-xl">*</span>
//           </label>
//           <input
//             type="text"
//             id="lname"
//             className="rounded-lg p-3 border"
//             onChange={handleChange}
//             value={SignupData.lname}
//           />
//           {signupErrors.lname && (
//             <p className="text-red-600 text-sm text-right mt-1">
//               {signupErrors.lname}
//             </p>
//           )}
//         </div>

//         {/* third input */}

//         <div className="flex flex-col mr-6 ml-6 mb-5">
//           <label htmlFor="email" className="text-right text-sm">
//             ایمیل:<span className="text-red-600 text-xl">*</span>
//           </label>
//           <input
//             type="text"
//             id="email"
//             className="rounded-lg p-3 border"
//             onChange={handleChange}
//             value={SignupData.email}
//           />
//           {signupErrors.email && (
//             <p className="text-red-600 text-sm text-right mt-1">
//               {signupErrors.email}
//             </p>
//           )}
//         </div>

//         {/* fourth input */}

//         <div className="flex flex-col mr-6 ml-6 mb-5 ">
//           <label htmlFor="phone" className="text-right text-sm">
//             شماره تلفن:<span className="text-red-600 text-xl">*</span>
//           </label>
//           <input
//             type="text"
//             id="phone"
//             className="rounded-lg p-3 border"
//             onChange={handleChange}
//             value={SignupData.phone}
//           />
//           {signupErrors.phone && (
//             <p className="text-red-600 text-sm text-right mt-1">
//               {signupErrors.phone}
//             </p>
//           )}
//         </div>
//         <div className="flex justify-start sm:col-span-full sm:justify-end lg:justify-center mr-6 ml-6">
//           <button
//             type="submit"
//             className="border-2 bg-blue-600 text-white p-2 rounded-xl w-full sm:w-auto px-10"
//           >
//             ثبت نام
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default Singup;
import axios from "axios";
import { useState } from "react";

const Singup = () => {
  const [SignupData, setSignupData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const [signupErrors, setSignupErrors] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setSignupData({ ...SignupData, [id]: value });

    setSignupErrors({ ...signupErrors, [id]: "" });
  };

  const validateSignup = () => {
    const newErrors = {
      fname: "",
      lname: "",
      email: "",
      phone: "",
    };

    if (!SignupData.fname.trim()) {
      newErrors.fname = "نام الزامی است";
    }

    if (!SignupData.lname.trim()) {
      newErrors.lname = "نام خانوادگی الزامی است";
    }

    if (!SignupData.email.trim()) {
      newErrors.email = "ایمیل الزامی است";
    }

    if (!SignupData.phone.trim()) {
      newErrors.phone = "شماره تماس الزامی است";
    } else if (SignupData.phone.length !== 11) {
      newErrors.phone = "شماره تماس باید دقیقاً ۱۱ رقم باشد";
    }

    setSignupErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validateSignup();

    if (!isValid) return;

    try {
      const responseServer = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: SignupData.lname,
          body: SignupData.fname,
        },
      );

      console.log(responseServer);

      setSignupData({
        fname: "",
        lname: "",
        email: "",
        phone: "",
      });
    } catch {
      console.log("مشکل ارسال فرم");
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
      <h1 className="text-4xl text-center text-text font-bold mb-10">
        ثبت نام
      </h1>

      <form
        onSubmit={handleSubmit}
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
            نام:
            <span className="text-error text-xl">*</span>
          </label>

          <input
            type="text"
            id="fname"
            className={inputStyle}
            onChange={handleChange}
            value={SignupData.fname}
          />

          {signupErrors.fname && (
            <p className="text-error text-sm text-right mt-1">
              {signupErrors.fname}
            </p>
          )}
        </div>

        {/* نام خانوادگی */}
        <div className="flex flex-col mr-6 ml-6 mb-5">
          <label
            htmlFor="lname"
            className="text-right text-sm text-muted font-medium"
          >
            نام خانوادگی:
            <span className="text-error text-xl">*</span>
          </label>

          <input
            type="text"
            id="lname"
            className={inputStyle}
            onChange={handleChange}
            value={SignupData.lname}
          />

          {signupErrors.lname && (
            <p className="text-error text-sm text-right mt-1">
              {signupErrors.lname}
            </p>
          )}
        </div>

        {/* ایمیل */}
        <div className="flex flex-col mr-6 ml-6 mb-5">
          <label
            htmlFor="email"
            className="text-right text-sm text-muted font-medium"
          >
            ایمیل:
            <span className="text-error text-xl">*</span>
          </label>

          <input
            type="text"
            id="email"
            className={inputStyle}
            onChange={handleChange}
            value={SignupData.email}
          />

          {signupErrors.email && (
            <p className="text-error text-sm text-right mt-1">
              {signupErrors.email}
            </p>
          )}
        </div>

        {/* شماره تلفن */}
        <div className="flex flex-col mr-6 ml-6 mb-5">
          <label
            htmlFor="phone"
            className="text-right text-sm text-muted font-medium"
          >
            شماره تلفن:
            <span className="text-error text-xl">*</span>
          </label>

          <input
            type="text"
            id="phone"
            className={inputStyle}
            onChange={handleChange}
            value={SignupData.phone}
          />

          {signupErrors.phone && (
            <p className="text-error text-sm text-right mt-1">
              {signupErrors.phone}
            </p>
          )}
        </div>

        {/* دکمه */}
        <div className="flex justify-center sm:col-span-full">
          <button
            type="submit"
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
            "
          >
            ثبت نام
          </button>
        </div>
      </form>
    </div>
  );
};

export default Singup;
