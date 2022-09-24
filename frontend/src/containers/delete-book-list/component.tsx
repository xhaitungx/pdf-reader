import React from "react";
import Book from "../../model/Book";
import { BookApi } from "../../api";
import DeletedBookItem from "../../components/deleted-book-item";
import Loading from "../../components/loading";
import { DeletedBookListProps, DeletedBookListStates } from "./interface";
import {
  Typography,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  InputAdornment,
} from "@mui/material";
import "./style.css";
class DeletedBookList extends React.Component<
  DeletedBookListProps,
  DeletedBookListStates
> {
  constructor(props: DeletedBookListProps) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  async componentDidMount() {
    console.log(this.props.deletedBooks);

    if (!this.props.deletedBooks) {
      const result = await BookApi("getDeletedBooksList");
      if (result.books.length > 0) {
        this.props.handleFetchDeletedBooks(result.books);
      } else console.log("rong");
    }
  }

  render() {
    return (
      <>
        <div className="deleted-book-list-heading" style={{ color: "white" }}>
          <Typography variant="h4">Thùng rác</Typography>
        </div>

        {this.props.deletedBooks ? (
          <div className="book-list-container container">
            {this.props.deletedBooks.map((book: Book) => (
              <DeletedBookItem book={book} key={book.id} />
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </>
    );
  }
}

export default DeletedBookList;
