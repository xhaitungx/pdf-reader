import React from "react";
import axios from "axios";
import "./style.css";
import { useDispatch } from "react-redux";
import { handleFetchBooks } from "../../store/actions";
import { Button } from "@mui/material";
const ImportFromLocal = () => {
  const dispatch = useDispatch();

  const onImportBook = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const filesData = new FormData();
    if (files)
      for (let i = 0; i < files.length; i++) {
        filesData.append(`files`, files[i]);
      }
    const result = await axios
      .post("http://localhost:5004/book", filesData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(({ data }) => data.success);
    console.log(result.length);
    if (result.length >= 1)
      axios
        .get("http://localhost:5004/book")
        .then(({ data }) => dispatch(handleFetchBooks(data.book)));
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
        Thêm sách
      </Button>
    </div>
  );
};

export default ImportFromLocal;
