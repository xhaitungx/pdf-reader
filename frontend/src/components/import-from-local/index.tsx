import React, { useEffect } from "react";
import axios from "axios";
import { IBook } from "../../types/book";
import "./style.css";

const ImportFromLocal = () => {
  function ABtoBuffer(ab) {
    const buf = Buffer.alloc(ab.byteLength);
    const view = new Uint8Array(ab);
    for (let i = 0; i < buf.length; ++i) {
      buf[i] = view[i];
    }
    return buf;
  }

  async function getFileContent(file: any) {
    // Common information
    let bookName = file.name.split(".")[0];
    let reader = new FileReader();
    reader.readAsArrayBuffer(file);
    // Book content
    reader.onload = async (e) => {
      let fileContent = ABtoBuffer((e.target as any).result);
      let book = {
        name: bookName,
        content: fileContent,
      };

      // await axios
      //   .post("http://localhost:5004/api/book", book)
      //   .then(({ data }) => console.log(data))
      //   .catch(({ error }) => console.log(error));
      await axios
        .get("http://localhost:5004/api/book")
        .then(({ data }) => console.log(data));
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
      <input
        type="file"
        id="input-import-book"
        accept=".pdf"
        multiple
        onChange={onImportBook}
      />
      <button
        className="btn import-btn"
        onClick={(e) => document.getElementById("input-import-book")!.click()}
      >
        Import
      </button>
    </div>
  );
};

export default ImportFromLocal;
