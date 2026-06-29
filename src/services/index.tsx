import axios from "axios";
const RootApi = "https://jsonplaceholder.typicode.com";

// https://aloghesti.com/contact-us/
//  https://jsonplaceholder.typicode.com/posts

export const getCotches = async () => {
  try {
    const response = await axios.get(`${RootApi}/users`);
    return response.data;
  } catch {
    console.log("getCotches error");
  }
};
