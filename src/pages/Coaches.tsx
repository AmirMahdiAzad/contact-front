import { useEffect, useState } from "react";
import Loader from "../helpers/Loding";
import { getCotches } from "../services";
import userType from "../helpers/Type/userType";

const Coaches = () => {
  const [users, setUsers] = useState<userType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCotches = async () => {
      try {
        const cotches = await getCotches();

        setUsers(cotches);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCotches();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {users.map((user) => (
        <div
          key={user.documentId}
          className="rounded-xl border border-borderColor bg-surface overflow-hidden  mt-6"
        >
         
          {/* عکس مربی */}
          <div className="w-full h-72 bg-slate-100 flex items-center justify-center">
            <img
              src={`http://localhost:1337${user.image.url}`}
              alt={user.name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* اطلاعات مربی */}
          <div className="p-5 space-y-4">
            <p className="text-text">
              <span className="font-bold text-muted">نام :</span> {user.name}
            </p>

            <p className="text-text">
              <span className="font-bold text-muted">شماره تلفن :</span>{" "}
              {user.phone}
            </p>

            <p className="text-text break-all">
              <span className="font-bold text-muted">ایمیل :</span> {user.email}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Coaches;
