import axios from "axios";

const Axios = axios.create({
  baseURL: "https://localhost:5004.com/",
});
const userId = window.sessionStorage.getItem("userId");

const BookApi = async (type, payload) => {
  const body = {
    userId: userId,
    payload: payload,
  };
  switch (type) {
    case "addBooks":
      return await Axios.post("/book", body);
    case "getBooksList":
      return await Axios.post("/book/books-list", body);
    case "getBook":
      return await Axios.post("/book/book-detail", body);
  }
};
