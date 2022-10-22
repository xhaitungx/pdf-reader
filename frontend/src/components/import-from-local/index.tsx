import React from "react";
import axios from "axios";
import "./style.css";
import { BookApi } from "../../api";
import { useDispatch } from "react-redux";
import { handleFetchBooks } from "../../store/actions";
import { Button } from "@mui/material";
import FileUploadIcon from '@mui/icons-material/FileUpload';

const ImportFromLocal = () => {
  const dispatch = useDispatch();

  const onImportBook = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const userId = window.localStorage.getItem("userId");
    const files = e.target.files;
    const filesData = new FormData();
    if (files)
      for (let i = 0; i < files.length; i++) {
        filesData.append(`files`, files[i]);
      }
    if (userId !== null && userId !== undefined)
      filesData.append(`userId`, userId);
    const result = await axios
      .post("http://localhost:5004/book", filesData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(({ data }) => data.success);
    if (result.length >= 1) {
      const result = await BookApi("getBooksList");
      dispatch(handleFetchBooks(result.books));
    }
  };

  return (
    <div>
      <input
        type="file"
        id="input-import-book"
        accept=".pdf"
        multiple
        onChange={onImportBook}
      />
      <Button
        variant="contained"
        onClick={(e) => document.getElementById("input-import-book")!.click()}
        sx={{
          background: "#ebecf0",
          color: "black",
          "&:hover": {
            background: "#b5b6b9",
            color: "black",
          },
        }}
      >
        <FileUploadIcon />
        Thêm sách
      </Button>
    </div>
  );
};

export default ImportFromLocal;
