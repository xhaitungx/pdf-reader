import React from "react";
import { BookApi } from "../../api";
import Book from "../../model/Book";
import BookItem from "../../components/book-item";
import Loading from "../../components/loading";
import { BookListProps, BookListStates } from "./interface";
import SnackBar from "../../components/snack-bar";
import { Typography, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./style.css";
class BookList extends React.Component<BookListProps, BookListStates> {
  constructor(props: BookListProps) {
    super(props);
    this.state = {
      searchInput: "",
      bookListMenu: false,
      alertType: "",
      openSnackbar: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.setAlertType = this.setAlertType.bind(this);
    this.handleCloseSnackbar = this.handleCloseSnackbar.bind(this);
  }

  setAlertType = (type: string) => {
    this.setState({
      alertType: type,
      openSnackbar: true,
    });
  };

  handleCloseSnackbar = (type: string) => {
    this.setState({
      openSnackbar: false,
    });
  };

  async componentDidMount() {
    if (!this.props.books) {
      const res = await BookApi("getBooksList");
      if (res.status === 200) {
        this.props.handleFetchBooks(res.data.books);
      }
    }
  }

  async componentDidUpdate() {
    if (!this.props.books) {
      const res = await BookApi("getBooksList");
      if (res.status === 200) {
        this.props.handleFetchBooks(res.data.books);
      }
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
        {this.props.books === null ? (
          <Loading />
        ) : this.props.books.length > 0 ? (
          <div className="book-list-container container">
            {this.filterBooks(this.props.books).map((book: Book) => (
              <BookItem
                book={book}
                openSnackBar={this.setAlertType}
                key={book.id}
              />
            ))}
          </div>
        ) : (
          <div>sdsds</div>
        )}
        <SnackBar
          open={this.state.openSnackbar}
          handleClose={this.handleCloseSnackbar}
          type={this.state.alertType}
          message="Sách đã được chuyển vào thùng rác"
        />
      </>
    );
  }
}

export default BookList;
