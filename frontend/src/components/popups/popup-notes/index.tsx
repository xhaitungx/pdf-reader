import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import "./style.css";
const NotePopup = (props) => {
  const [Note, setNote] = useState({
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

  const onSubmit = () => {
    const note = (
      document.querySelector(".pop-up-note-input") as HTMLInputElement
    ).value;
    console.log(note);
  };

  return (
    <>
      <div className="pop-up-note">
        <textarea className="pop-up-note-input" />
        <div className="pop-up-note-highlight">
          {hightlightColor.map((color) => (
            <div
              className="highlight-button"
              style={{
                background: color,
                border: Note.color === color ? "2px solid black" : "",
              }}
              onClick={(e) => setNote({ color })}
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
