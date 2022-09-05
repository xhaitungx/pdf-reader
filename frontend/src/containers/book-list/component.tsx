import React from "react";
import axios from "axios";
import BookItem from "../../components/book-item";
import Loading from "../../components/loading";
import { BookListProps, BookListStates } from "./interface";
import { Typography } from "@mui/material";
import "./style.css";
class BookList extends React.Component<BookListProps, BookListStates> {
  constructor(props: BookListProps) {
    super(props);
    this.state = {
      searchInput: "",
      isLoading: false,
    };
  }

  async componentDidMount() {
    console.log(this.props.books);
    if (!this.props.books) {
      this.setState({
        isLoading: true,
      });
      await axios.get("http://localhost:5004/book").then(({ data }) => {
        this.props.handleFetchBooks(data.book);
      });
    }
  }

  render() {
    return (
      <>
        <Typography variant="h4" sx={{ position: "fixed" }}>
          BookList
        </Typography>
        {this.props.books ? (
          <div className="book-list-container container">
            {this.props.books.map((book) => (
              <BookItem book={book} />
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </>
    );
  }
}

export default BookList;
