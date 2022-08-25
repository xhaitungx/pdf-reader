import React from "react";
import { BookListProps, BookListStates } from "./interface";
import ComponentRoutes from "../../router/ComponentRoutes";
import "./style.css";
class BookList extends React.Component<BookListProps, BookListStates> {
  render() {
    return <h1>BookList</h1>;
  }
}

export default BookList;
