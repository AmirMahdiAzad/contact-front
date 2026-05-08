import SportEdu from "../components/SportEdu";

const Home = () => {
  const users: {
    id: number;
    name: string;
    role: string;
  } = {
    id: 1,
    name: "amir",
    role: "ADMIN",
  };

  console.log(users);

  if (users.role == "ADMIN") {
    console.log("وارد شدید ");
  } else {
    console.log("نشدید");
  }

  return (
    <div>
      <SportEdu />
    </div>
  );
};
export default Home;
