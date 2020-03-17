import React from "react";

const FeedbackButton = ({ onHandleClick }) => {
  return (
    <>
      <button type="button" onClick={onHandleClick} name="good">Good</button>
      <button type="button" onClick={onHandleClick} name="neutral">Neutral</button>
      <button type="button" onClick={onHandleClick} name="bad">Bad</button>
    </>
  );
};

export default FeedbackButton;
