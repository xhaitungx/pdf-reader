import React, { useState, useEffect } from "react";
import { Button, LinearProgress } from "@mui/material";
import { VocabulariesApi } from "../../../api";
import axios from "axios";
import "./style.css";

const TranslatePopup = (props) => {
  const [meaning, setMeaning] = useState("");
  useEffect(() => {
    axios
      .post("http://localhost:5004/translator", {
        text: props.text,
      })
      .then(({ data }) => setMeaning(data.result))
      .catch((error) => console.log(error.errorMessage));
  }, []);

  const handleStoreVocabulary = () => {
    if (meaning !== "") {
      {
        VocabulariesApi("addVocabulary", {
          text: props.text,
          meaning: meaning,
        });
        props.closeMenu();
      }
    }
  };
  return (
    <>
      <div className="pop-up-translate">
        <div className="word">{props.text}</div>
        {meaning ? (
          <div className="meaning">{meaning}</div>
        ) : (
          <LinearProgress />
        )}
      </div>
      <div className="pop-up-menu-buttons">
        <Button sx={{ color: "white" }} onClick={props.closeMenu}>
          Hủy
        </Button>
        <Button
          variant="contained"
          sx={{
            color: "black",
            background: "white",
            "&:hover": {
              background: "white",
            },
          }}
          onClick={handleStoreVocabulary}
        >
          Lưu
        </Button>
      </div>
    </>
  );
};

export default TranslatePopup;
