import React, { useState } from "react";
import { handleFetchBooks } from "../../store/actions";
import { useDispatch } from "react-redux";
import {
  IconButton,
  Dialog,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
import { Undo, Delete } from "@mui/icons-material";
import { BookApi } from "../../api";
import "./style.css";
const DeletedBookItem = ({ book }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [enableDelete, setEnableDelete] = useState(false);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeAnchor = () => {
    setAnchorEl(null);
  };

  const handleUpdateBook = async (e) => {
    dispatch(handleFetchBooks(null));
  };

  const renderEditDialog = () => (
    <Dialog open={isOpenDialog} onClose={(e) => setIsOpenDialog(false)}>
      <DialogContent>
        <div className="group-button">
          <Button onClick={(e) => setIsOpenDialog(false)}>Hủy</Button>
          <Button variant="contained" onClick={handleUpdateBook}>
            Lưu
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <>
      <div className="book-item" onMouseEnter={(e) => setEnableDelete(true)}>
        {enableDelete && (
          <div
            className="delete-area"
            onMouseLeave={(e) => setEnableDelete(false)}
          >
            <IconButton
              size="large"
              color="error"
              sx={{ color: "#ff2d2d" }}
              onClick={handleClick}
            >
              <Delete />
            </IconButton>
            <IconButton
              size="large"
              sx={{ color: "#a2ff28" }}
              onClick={handleClick}
            >
              <Undo />
            </IconButton>
          </div>
        )}
        <img src={book.cover} className="book-cover" alt={book.name} />
        <p>{book.name}</p>
      </div>
      {renderEditDialog()}
    </>
  );
};

export default DeletedBookItem;
