import { useState } from "react";

const Card = ({
  name,
  clicked,
  incrementScore,
  resetScore,
  resetClicked,
  setClicked,
  shuffleCardData,
}) => {
  const handleClick = () => {
    if (clicked === false) {
      incrementScore();
      setClicked(name);
    } else {
      resetScore();
      resetClicked();
    }
  };
  return (
    <div
      className="bg-gray-500 m-4 text-center cursor-pointer shadow-2xl rounded-xl transition-all"
      onClick={handleClick}
    >
      <p>{clicked.toString()}</p>
      <div className="bg-stone-600 p-12 rounded-b-xl">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Card;
