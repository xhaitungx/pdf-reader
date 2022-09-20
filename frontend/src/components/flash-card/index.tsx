import React from "react";
import "./style.css";
const FlashCard = (props) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h1>{props.text}</h1>
        </div>
        <div className="flip-card-back">
          <h1>{props.meaning}</h1>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
