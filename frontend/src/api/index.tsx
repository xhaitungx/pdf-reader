import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:5004",
});

export const BookApi = async (type, bookId = "", payload = {}) => {
  const userId = window.localStorage.getItem("userId");
  const body = {
    userId: userId,
    bookId: bookId,
    payload: payload,
  };
  switch (type) {
    case "addBooks":
      return await Axios.post("/book", body).then(({ data }) => data);
    case "getBooksList":
      return await Axios.post("/book/books-list", body).then(
        ({ data }) => data
      );
    case "getDeletedBooksList":
      return await Axios.post("/book/deleted-books-list", body).then(
        ({ data }) => data
      );
    case "getBook":
      return await Axios.post("/book/book-detail", body).then(
        ({ data }) => data
      );
    case "updateBook":
      return await Axios.patch("/book", body).then(({ data }) => data);
    case "restoreBook":
      return await Axios.patch("/book/restore", body as any).then(
        ({ data }) => data
      );
    case "softDeleteBook":
      return await Axios.patch("/book", body).then((res) => res);
    case "hardDeleteBook":
      return await Axios.patch("/book", body).then(({ data }) => data);
  }
};

export const VocabulariesApi = async (type, payload = {}) => {
  const userId = window.localStorage.getItem("userId");
  const bookId = window.location.search.split("=").reverse()[0];
  const body = {
    userId: userId,
    bookId: bookId,
    payload: payload,
  };
  switch (type) {
    case "addVocabulary":
      return await Axios.post("/vocabulary", body).then(({ data }) => data);
    case "getVocabularies":
      return await Axios.post("/vocabulary/vocabulary-list", body).then(
        ({ data }) => data
      );
  }
};

export const UserApi = async (type, payload) => {
  const userId = window.localStorage.getItem("userId");
  const body = {
    userId: userId,
    payload: payload,
  };
  console.log(userId);
  switch (type) {
    case "register":
      return await Axios.post("/user/register", body).then(({ data }) => data);
    case "login":
      return await Axios.post("/user/login", body.payload).then(
        ({ data }) => data
      );
  }
};
