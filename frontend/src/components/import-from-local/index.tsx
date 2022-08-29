import React, { useState } from "react";
import axios from "axios";
import { IBook } from "../../types/book";
import "./style.css";
import { Button } from "@mui/material";
import { fetchMD5 } from "../../utils/fileUtils/md5Util";
import { ABtoBuffer, ABtoBase64 } from "../../utils/fileUtils/typeUtils";
const ImportFromLocal = () => {
  const [img, setImg] = useState(
    "data:image/png;base64," +
      "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
  );
  async function getFileContent(file: any) {
    try {
      fetchMD5(file);
    } catch (err) {
      console.log(err);
    }
    // Common information
    let bookName = file.name.split(".")[0];
    let reader = new FileReader();
    reader.readAsArrayBuffer(file);
    // Book content
    reader.onload = async (e) => {
      const fileArrayBuffer = (e.target as any).result;
      let bookContent = ABtoBuffer(fileArrayBuffer);
      let bookCover =
        "data:image/png/jpeg;base64," + ABtoBase64(fileArrayBuffer);
      setImg(bookCover);
      let book = {
        name: bookName,
        content: bookContent,
      };

      // await axios
      //   .post("http://localhost:5004/api/book", book)
      //   .then(({ data }) => console.log(data))
      //   .catch(({ error }) => console.log(error));
      // await axios
      //   .get("http://localhost:5004/api/book")
      //   .then(({ data }) => console.log(data));
    };
  }

  function handleImportedBook(file: any) {
    // const books: IBook[] = [];
    // console.log(file);
    getFileContent(file);
    // books.push();
    // console.log(books);
  }

  const onImportBook = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const results: IBook[] = [];
    if (files !== null)
      for (let i = 0; i < files.length; i++) handleImportedBook(files[i]);
  };

  return (
    <div>
      {img !== "" && <img src={img} alt="ssd" />}
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
