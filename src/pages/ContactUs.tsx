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
    setTimeout(() => setToast({ text: "", status: null }), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;

    setFormData({ ...formData, [id]: value });

    // وقتی کاربر تایپ کرد، خطای همان فیلد پاک شود
    setErrors({ ...errors, [id]: "" });
  };

  const validateForm = () => {
    const newErrors = {
      subject: "",
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!formData.subject.trim()) newErrors.subject = "موضوع الزامی است";
    if (!formData.name.trim()) newErrors.name = "نام و نام خانوادگی الزامی است";
    if (!formData.email.trim()) newErrors.email = "ایمیل الزامی است";

    if (!formData.phone.trim()) {
      newErrors.phone = "شماره تماس الزامی است";
    } else if (formData.phone.length !== 11) {
      newErrors.phone = "شماره تماس باید دقیقاً ۱۱ رقم باشد";
    }
    if (!formData.message.trim()) newErrors.message = "متن پیام الزامی است";

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
    <div>
      {toast.status !== null && (
        <Toast text={toast.text} status={toast.status} />
      )}
      <form
        onSubmit={handleSubmit}
        className="grid gap-y-5 text-center my-10 border-gray-500 rounded-xl sm:grid-cols-2"
        action=""
      >
        <div className="flex flex-col mr-6 ml-6">
          <label htmlFor="subject" className="text-right text-sm">
            موضوع: <span className="text-red-600 text-xl">*</span>
          </label>
          <input
            id="subject"
            type="text"
            className="rounded-lg p-3 border"
            onChange={handleChange}
            value={formData.subject}
          />
          {errors.subject && (
            <p className="text-red-600 text-sm text-right mt-1">
              {errors.subject}
            </p>
          )}
        </div>

        <div className="flex flex-col mr-6 ml-6">
          <label htmlFor="name" className="text-right text-sm">
            نام و نام خانوادگی : <span className="text-red-600 text-xl">*</span>
          </label>
          <input
            id="name"
            type="text"
            className="rounded-lg p-3 border"
            onChange={handleChange}
            value={formData.name}
          />
          {errors.name && (
            <p className="text-red-600 text-sm text-right mt-1">
              {errors.name}
            </p>
          )}
        </div>

        <div className="flex flex-col mr-6 ml-6">
          <label htmlFor="email" className="text-right text-sm">
            ایمیل : <span className="text-red-600 text-xl">*</span>
          </label>
          <input
            id="email"
            type="text"
            className="rounded-lg p-3 border"
            onChange={handleChange}
            value={formData.email}
          />
          {errors.email && (
            <p className="text-red-600 text-sm text-right mt-1">
              {errors.email}
            </p>
          )}
        </div>

        <div className="flex flex-col mr-6 ml-6">
          <label htmlFor="phone" className="text-right text-sm">
            شماره تماس: <span className="text-red-600 text-xl">*</span>
          </label>
          <input
            id="phone"
            type="number"
            className="rounded-lg p-3 border"
            onChange={handleChange}
            value={formData.phone}
          />
          {errors.phone && (
            <p className="text-red-600 text-sm text-right mt-1">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="flex flex-col mr-6 ml-6 sm:col-span-full">
          <label htmlFor="message" className="text-right text-sm">
            متن پیام <span className="text-red-600 text-xl">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            className="rounded-lg border p-3"
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

        <div className="flex justify-start sm:col-span-full sm:justify-end lg:justify-center mr-6 ml-6">
          <button
            type="submit"
            className="border-2 bg-blue-600 text-white p-2 rounded-xl w-full sm:w-auto px-10"
          >
            با من تماس بگیر
          </button>
        </div>
      </form>

      {/*   form   */}

      <div className="border border-gray-400   rounded-xl m-2  p-2">
        <h2 className="font-semibold mb-10 p-2 ">اطلاعات تماس </h2>
        <div className=" mx-7 grid grid-cols-1 gap-10 md:grid md:grid-cols-2">
          {/* section one */}
          <div className="bg-gray-300 text-black rounded-xl p-4 flex flex-row-reverse items-center">
            <FaPhoneAlt size={30} />
            <div className="text-right flex-1">
              <p className="text-sm text-gray-500">شماره تماس</p>
              <p>021-91221133</p>
            </div>
          </div>
          {/* section two */}
          <div className="bg-gray-300 text-black rounded-xl p-4 flex flex-row-reverse items-center">
            <MdEmail size={30} />

            <div className="text-right flex-1">
              <p className="text-sm text-gray-500"> ایمیل</p>
              <p>amirmahdi.azad.2010@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
