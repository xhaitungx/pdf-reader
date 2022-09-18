import React, { useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
import { MoreVert, Edit, Delete } from "@mui/icons-material";
import "./style.css";
const BookItem = ({ book }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeAnchor = () => {
    setAnchorEl(null);
  };

  const handleOpenDialog = () => {};

  const renderEditDialog = () => (
    <Dialog open={isOpenDialog}>
      <DialogContent>
        <TextField placeholder="Tên sách" />
        <div className="group-button">
          <Button onClick={(e) => setIsOpenDialog(false)}>Hủy</Button>
          <Button variant="contained">Lưu</Button>
        </div>
      </DialogContent>
    </Dialog>
  );

  const renderMenuButton = () => (
    <div className="menu-button">
      <IconButton size="small" onClick={handleClick}>
        <MoreVert />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={closeAnchor}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={(e) => {
            setIsOpenDialog(true);
            closeAnchor();
          }}
        >
          <Edit /> Chỉnh sửa
        </MenuItem>
        <MenuItem sx={{ color: "red" }} onClick={closeAnchor}>
          <Delete /> Xóa sách
        </MenuItem>
      </Menu>
    </div>
  );
  return (
    <>
      <div className="book-item">
        {renderMenuButton()}
        <a href={`/pdf-reader?bookId=${book._id}`} target="_blank">
          <img src={book.cover} className="book-cover" alt={book.name} />
          <p>{book.name}</p>
        </a>
      </div>
      {renderEditDialog()}
    </>
  );
};

export default BookItem;
