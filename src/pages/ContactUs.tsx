import { useEffect, useState } from "react";
import Loader from "../helpers/Loding";
import { getCotches } from "../services";
import userType from "../helpers/Type/userType";

const Coaches = () => {
  const [users, setUsers] = useState<userType[]>([]);

  useEffect(() => {
    const fetchCotches = async () => {
      const cotches = await getCotches();
      setUsers(cotches);
    };
    fetchCotches();
  }, []);

  if (users.length === 0) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 bg-[#CBD5E1] min-h-screen p-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="
            
            border border-[#94A3B8]
            rounded-xl
            m-6
            font-semibold
            shadow-md
            hover:shadow-xl
            transition-all
            duration-300
          "
        >
          <img src="images/SportEdu/edu-man.webp" alt="" />

          <p className="text-[#0F172A] p-4">نام : {user.name}</p>

          <p className="text-[#0F172A] p-4">شماره تلفن : {user.phone}</p>

          <p className="text-[#0F172A] p-4">ایمیل : {user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Coaches;
