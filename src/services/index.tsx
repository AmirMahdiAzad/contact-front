import axios from "axios";

export const getCotches = async () => {
  const response = await axios.get(
    "http://localhost:1337/api/all-coaches?populate=*",
  );

  return response.data.data;
};
