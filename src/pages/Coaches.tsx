import axios from "axios";
import { useEffect, useState } from "react";
import User from "../helpers/Type";
import Loader from "../helpers/Loding";

const Coaches = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
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
          <img src="/images/404-error.jpg" alt="" />
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
