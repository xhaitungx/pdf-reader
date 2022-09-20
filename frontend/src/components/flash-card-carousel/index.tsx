import React from "react";
import { useState } from "react";
import { AutoAwesomeMotion } from "@mui/icons-material";
import FlashCard from "../flash-card";
import Carousel from "react-material-ui-carousel";
import "./style.css";
const FlashCardCarousel = () => {
  const [currentCard, setCurrentCard] = useState(1);
  const vocabularyList = [
    {
      text: "Hello",
      meaning: "Xin chào",
    },
    {
      text: "What do yo mean?",
      meaning: "Ý bạn là sao?",
    },
    {
      text: "What?",
      meaning: "Gì vậy?",
    },
  ];
  return (
    <div className="flash-card-carousel-container" style={{ width: "30%" }}>
      <div className="card-number-status">
        <AutoAwesomeMotion />
        {currentCard + "/" + vocabularyList.length}
      </div>
      <Carousel
        animation="slide"
        navButtonsAlwaysVisible
        cycleNavigation={false}
        indicators={false}
        autoPlay={false}
        prev={(e) => setCurrentCard(currentCard - 1)}
        next={(e) => setCurrentCard(currentCard + 1)}
      >
        {vocabularyList.map((item, i) => (
          <>
            <FlashCard
              text={item.text}
              meaning={item.meaning}
              currentCard={i + 1}
              listLength={vocabularyList.length}
            />
          </>
        ))}
      </Carousel>
    </div>
  );
};

export default FlashCardCarousel;
