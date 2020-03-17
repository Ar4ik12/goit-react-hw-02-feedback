import React from "react";

const Statistics = ({ good, neutral, bad, getTotal, getPercentage }) => {
  return (
    <>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{getTotal()}</p>
      <p>Positive feedback:{getPercentage()}%</p>
    </>
  );
};

export default Statistics;
