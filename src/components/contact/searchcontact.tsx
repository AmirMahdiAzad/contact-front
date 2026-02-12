const SearchContact = () => {
  return (
    <div className="w-full sm:w-72" dir="rtl">
      <div className="flex">
        {/* Purple label */}
        <div className="bg-purple-600 text-white px-3 flex items-center rounded-r-md">
          جستجو
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="جستجوی مخاطب"
          className="
            w-full
            bg-gray-200
            text-black
            px-3 py-2
            rounded-l-md
            outline-none
            focus:ring-2
            focus:ring-purple-500
          "
        />
      </div>
    </div>
  );
};

export default SearchContact;
