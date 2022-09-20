import React from "react";
import { useState } from "react";
import { AutoAwesomeMotion } from "@mui/icons-material";
import FlashCard from "../flash-card";
import Carousel from "react-material-ui-carousel";
import "./style.css";
const FlashCardCarousel = ({ vocabularyList }) => {
  const [currentCard, setCurrentCard] = useState(1);
  return (
    <div className="flash-card-carousel-container" style={{ width: "30vw" }}>
      <div className="card-number-status">
        <AutoAwesomeMotion />
        {currentCard + "/" + vocabularyList.length}
      </div>
      <Carousel
        sx={{ background: "transparent" }}
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
