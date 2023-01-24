import { useState } from "react";

const Card = ({ name, incrementScore, score }) => {
  const [clicked, setClicked] = useState("false");

  const handleClick = () => {
    if (clicked === "false") {
      setClicked("true");
      incrementScore(score + 1);
    } else {
    }
  };
  return (
    <div
      className="bg-gray-500 m-4 text-center cursor-pointer"
      onClick={handleClick}
    >
      <p>{clicked}</p>
      <div className="bg-lime-300 p-12">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Card;
