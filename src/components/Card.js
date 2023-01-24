import { useState } from "react";

const Card = ({
  name,
  clicked,
  incrementScore,
  resetScore,
  resetClicked,
  setClicked,
}) => {
  // const resetClicked = () => {
  //   setClicked(false);
  // };

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
      className="bg-gray-500 m-4 text-center cursor-pointer"
      onClick={handleClick}
    >
      <p>{clicked.toString()}</p>
      <div className="bg-lime-300 p-12">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Card;
