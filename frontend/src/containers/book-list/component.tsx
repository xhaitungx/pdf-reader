import React from "react";
import axios from "axios";
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
      anchorEl: null,
      open: false,
    };
    this.setAnchorEl = this.setAnchorEl.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  async componentDidMount() {
    if (!this.props.books) {
      this.setState({
        isLoading: true,
      });
      await axios.get("http://localhost:5004/book").then(({ data }) => {
        this.props.handleFetchBooks(data.book);
      });
    }
  }

  handleClick(event) {
    this.setAnchorEl(event.currentTarget);
  }
  setAnchorEl(value) {
    this.setState({
      anchorEl: value,
      open: !this.state.open,
    });
  }
  handleClose() {
    this.setAnchorEl(null);
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

  renderMenu() {
    return (
      <Menu
        id="fade-menu"
        anchorEl={this.state.anchorEl}
        open={this.state.open}
        onClose={this.handleClose}
      >
        <TextField
          value={this.state.searchInput}
          onChange={this.handleInput}
          placeholder="Tìm kiếm sách"
        />
        <MenuItem onClick={this.handleClose}>Xóa sách</MenuItem>
      </Menu>
    );
  }

  render() {
    return (
      <>
        <div className="book-list-heading" style={{ color: "white" }}>
          <Typography variant="h4">BookList</Typography>
          <IconButton onClick={this.handleClick}>
            <MoreVertIcon />
          </IconButton>
          {this.renderMenu()}
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
