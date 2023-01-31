import { useState } from "react";

const Card = ({
  name,
  clicked,
  incrementScore,
  resetScore,
  resetClicked,
  setClicked,
  src,
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
      className="bg-gray-500 m-4 text-center cursor-pointer rounded-xl transition-all border border-white"
      onClick={handleClick}
    >
      <p>{clicked.toString()}</p>
      <div className="bg-stone-600 shadow-lg p-4 rounded-b-xl">
        <p>{name}</p>
        <img src={src} alt="Ashe" className="w-60"></img>
      </div>
    </div>
  );
};

export default Card;
