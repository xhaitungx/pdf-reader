import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import "./style.css";
const NotePopup = (props) => {
  const [note, setNote] = useState({
    content: "",
    color: "#ffc701",
  });

  useEffect(() => {
    const textField = document.querySelector(
      ".pop-up-note-input"
    ) as HTMLInputElement;
    textField.focus();
  });

  const hightlightColor = [
    "#ffc701",
    "#ef5a68",
    "#c7e372",
    "#9ad0dc",
    "#d4ddda",
  ];

  const onInputNote = (e) => {
    setNote({ ...note, content: e.target.value });
  };

  const onSubmit = () => {
    console.log(note.content);
    setNote({ ...note, content: "" });
  };

  return (
    <>
      <div className="pop-up-note">
        <textarea
          className="pop-up-note-input"
          value={note.content}
          onChange={onInputNote}
        />
        <div className="pop-up-note-highlight">
          {hightlightColor.map((color) => (
            <div
              className="highlight-button"
              style={{
                background: color,
                border: note.color === color ? "2px solid black" : "",
              }}
              onClick={(e) => setNote({ ...note, color })}
            ></div>
          ))}
        </div>
      </div>
      <div className="pop-up-menu-buttons">
        <Button sx={{ color: "white" }} onClick={props.closeMenu}>
          Hủy
        </Button>
        <Button
          variant="contained"
          onClick={onSubmit}
          sx={{
            color: "black",
            background: "white",
            "&:hover": {
              background: "white",
            },
          }}
        >
          Lưu
        </Button>
      </div>
    </>
  );
};

export default NotePopup;
