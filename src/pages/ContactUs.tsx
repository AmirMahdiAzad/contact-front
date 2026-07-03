import axios from "axios";
import { useState } from "react";
import Toast from "../helpers/Toast ";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    subject: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [toast, setToast] = useState<{ text: string; status: number | null }>({
    text: "",
    status: null,
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;

    setFormData({
      ...formData,
      [id]: value,
    });

    setErrors({
      ...errors,
      [id]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {
      subject: "",
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!formData.subject.trim())
      newErrors.subject = "موضوع الزامی است";

    if (!formData.name.trim())
      newErrors.name = "نام و نام خانوادگی الزامی است";

    if (!formData.email.trim())
      newErrors.email = "ایمیل الزامی است";

    if (!formData.phone.trim()) {
      newErrors.phone = "شماره تماس الزامی است";
    } else if (formData.phone.length !== 11) {
      newErrors.phone = "شماره تماس باید دقیقاً ۱۱ رقم باشد";
    }

    if (!formData.message.trim())
      newErrors.message = "متن پیام الزامی است";

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) return;

    try {
      const responseServer = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: formData.name,
          body: formData.subject,
        },
      );

      console.log("response from server === ", responseServer);

      showToast("پیام شما با موفقیت ارسال شد!", 201);

      setFormData({
        subject: "",
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
      console.log("مشکل ارسال فرم");

      showToast("خطا در ارسال پیام، لطفاً دوباره تلاش کنید.", 500);
    }
  };

  return (
    <div className="bg-slate-300 min-h-screen py-10">
      {toast.status !== null && (
        <Toast text={toast.text} status={toast.status} />
      )}

      <form
        onSubmit={handleSubmit}
        className="grid gap-y-5 text-center my-10 mx-6 bg-slate-200 border border-slate-400 rounded-2xl shadow-xl p-8 sm:grid-cols-2"
      >
        {/* Subject */}

        <div className="flex flex-col mr-6 ml-6">
          <label htmlFor="subject" className="text-right text-sm text-slate-900">
            موضوع:
            <span className="text-red-600 text-xl">*</span>
          </label>

          <input
            id="subject"
            type="text"
            className="rounded-lg p-3 border border-slate-400 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            onChange={handleChange}
            value={formData.subject}
          />

          {errors.subject && (
            <p className="text-red-600 text-sm text-right mt-1">
              {errors.subject}
            </p>
          )}
        </div>

        {/* Name */}

        <div className="flex flex-col mr-6 ml-6">
          <label htmlFor="name" className="text-right text-sm text-slate-900">
            نام و نام خانوادگی:
            <span className="text-red-600 text-xl">*</span>
          </label>

          <input
            id="name"
            type="text"
            className="rounded-lg p-3 border border-slate-400 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            onChange={handleChange}
            value={formData.name}
          />

          {errors.name && (
            <p className="text-red-600 text-sm text-right mt-1">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}

        <div className="flex flex-col mr-6 ml-6">
          <label htmlFor="email" className="text-right text-sm text-slate-900">
            ایمیل:
            <span className="text-red-600 text-xl">*</span>
          </label>

          <input
            id="email"
            type="text"
            className="rounded-lg p-3 border border-slate-400 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            onChange={handleChange}
            value={formData.email}
          />

          {errors.email && (
            <p className="text-red-600 text-sm text-right mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}

        <div className="flex flex-col mr-6 ml-6">
          <label htmlFor="phone" className="text-right text-sm text-slate-900">
            شماره تماس:
            <span className="text-red-600 text-xl">*</span>
          </label>

          <input
            id="phone"
            type="number"
            className="rounded-lg p-3 border border-slate-400 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            onChange={handleChange}
            value={formData.phone}
          />

          {errors.phone && (
            <p className="text-red-600 text-sm text-right mt-1">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Message */}

        <div className="flex flex-col mr-6 ml-6 sm:col-span-full">
          <label
            htmlFor="message"
            className="text-right text-sm text-slate-900"
          >
            متن پیام
            <span className="text-red-600 text-xl">*</span>
          </label>

          <textarea
            id="message"
            rows={5}
            className="rounded-lg border border-slate-400 bg-slate-100 p-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="پیام خود را اینجا بنویسید..."
            onChange={handleChange}
            value={formData.message}
          ></textarea>

          {errors.message && (
            <p className="text-red-600 text-sm text-right mt-1">
              {errors.message}
            </p>
          )}
        </div>

        {/* Button */}

        <div className="flex justify-start sm:col-span-full sm:justify-end lg:justify-center mr-6 ml-6">
          <button
            type="submit"
            className="bg-slate-900 hover:bg-emerald-600 transition-all text-slate-100 px-10 py-3 rounded-xl shadow-lg"
          >
            با من تماس بگیر
          </button>
        </div>
      </form>

      {/* Contact Information */}

      <div className="border border-slate-400 bg-slate-200 rounded-2xl shadow-xl m-6 p-6">
        <h2 className="font-bold text-xl mb-10 text-slate-900">
          اطلاعات تماس
        </h2>

        <div className="mx-7 grid grid-cols-1 gap-10 md:grid-cols-2">

          <div className="bg-slate-100 rounded-xl p-5 flex flex-row-reverse items-center shadow-md hover:bg-emerald-100 transition-all">
            <FaPhoneAlt size={28} className="text-emerald-600" />

            <div className="text-right flex-1">
              <p className="text-sm text-slate-500">
                شماره تماس
              </p>

              <p className="font-semibold text-slate-900">
                021-91221133
              </p>
            </div>
          </div>

          <div className="bg-slate-100 rounded-xl p-5 flex flex-row-reverse items-center shadow-md hover:bg-emerald-100 transition-all">
            <MdEmail size={30} className="text-emerald-600" />

            <div className="text-right flex-1">
              <p className="text-sm text-slate-500">
                ایمیل
              </p>

              <p className="font-semibold text-slate-900">
                amirmahdi.azad.2010@gmail.com
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;