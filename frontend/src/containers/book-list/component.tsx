import React from "react";
import { BookApi } from "../../api";
import BookItem from "../../components/book-item";
import Loading from "../../components/loading";
import { BookListProps, BookListStates } from "./interface";
import {
  Typography,
  IconButton,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
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
      this.setState({
        isLoading: true,
      });
      const result = await BookApi("getBooksList");
      console.log(result);
      if (result.books.length > 0) {
        this.props.handleFetchBooks(result.books);
        this.setState({
          isLoading: true,
        });
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
            onChange={this.handleInput}
            placeholder="Tìm kiếm sách"
          />
        </div>

        {this.props.books ? (
          <div className="book-list-container container">
            {this.filterBooks(this.props.books).map((book) => (
              <BookItem book={book} key={book._id} />
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
