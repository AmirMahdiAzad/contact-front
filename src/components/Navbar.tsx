import SearchContact from "./contact/searchcontact";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
          {/* Title */}
          <div className="text-lg sm:text-xl font-bold">
            اپلیکیشن مدیریت <span className="text-purple-500">مخاطبین</span>
          </div>
          <SearchContact />
          {/* Search Box */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
