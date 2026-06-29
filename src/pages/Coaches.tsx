import { useEffect, useState } from "react";
// import User from "../helpers/Type";
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

  console.log("user state ====> ", users);
  if (users.length === 0) {
    return <Loader />;
  }
  return (
    <div className="grid grid-cols-1  xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3  ">
      {users.map((user) => (
        <div
          className=" bg-blue-700 border-4 border-gray-600-0 rounded-xl m-8 font-extrabold "
          key={user.id}
        >
          <img src="images/SportEdu/edu-man.webp" alt="" />
          <p className="text-gray-200 p-4">نام : {user.name}</p>
          <p className="text-gray-200 p-4">شماره تلفن : {user.phone}</p>
          <p className="text-gray-200 p-4">ایمیل : {user.email}</p>
          {/* <p className="text-gray-200 p-10">نام : {user.name}</p> */}
        </div>
      ))}
    </div>
  );
};

export default Coaches;
