import React from "react";
import { BookApi } from "../../api";
import Book from "../../model/Book";
import BookItem from "../../components/book-item";
import Loading from "../../components/loading";
import { BookListProps, BookListStates } from "./interface";
import { Typography, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./style.css";
class BookList extends React.Component<BookListProps, BookListStates> {
  constructor(props: BookListProps) {
    super(props);
    this.state = {
      searchInput: "",
      isLoading: false,
      bookListMenu: false,
    };
    this.handleInput = this.handleInput.bind(this);
  }

  async componentDidMount() {
    if (!this.props.books) {
      const result = await BookApi("getBooksList");
      console.log(result);
      console.log("hello");
      if (result.books.length > 0) {
        this.props.handleFetchBooks(result.books);
      } else console.log("rong");
    }
  }

  async componentDidUpdate() {
    if (!this.props.books) {
      const result = await BookApi("getBooksList");
      console.log(result);
      console.log("hello");
      if (result.books.length > 0) {
        this.props.handleFetchBooks(result.books);
      } else console.log("rong");
    }
  }

  filterBooks(books) {
    return books.filter((book) =>
      book.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
    );
  }

  handleInput(e) {
    this.setState({
      searchInput: e.target.value,
    });
  }

  render() {
    return (
      <>
        <div className="book-list-heading" style={{ color: "white" }}>
          <Typography variant="h4">BookList</Typography>
          <TextField
            value={this.state.searchInput}
            variant="standard"
            sx={{ padding: "0.5rem 1rem", color: "white" }}
            onChange={this.handleInput}
            placeholder="Tìm kiếm sách"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "White" }} />
                </InputAdornment>
              ),
            }}
          />
        </div>

        {this.props.books ? (
          <div className="book-list-container container">
            {this.filterBooks(this.props.books).map((book: Book) => (
              <BookItem book={book} key={book.id} />
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
