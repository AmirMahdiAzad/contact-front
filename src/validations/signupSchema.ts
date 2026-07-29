import * as yup from "yup";

export const signupSchema = yup.object({
  fname: yup.string().required("نام الزامی است"),

  lname: yup.string().required("نام خانوادگی الزامی است"),

  email: yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),

  phone: yup
    .string()
    .required("شماره تماس الزامی است")
    .matches(/^09\d{9}$/, "شماره تماس باید با 09 شروع شود و 11 رقم باشد"),
});

export type SignupForm = yup.InferType<typeof signupSchema>;
