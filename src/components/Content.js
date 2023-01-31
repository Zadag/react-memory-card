import { useEffect, useState } from "react";
import Card from "./Card";
import shuffle from "../utils/shuffle";
import ashe from "../assets/Ashe_0.jpeg";
import asol from "../assets/AurelionSol_0.jpeg";
import corki from "../assets/Corki_0.jpeg";
import khazix from "../assets/Khazix_0.jpeg";

const Content = ({ incrementScore, resetScore }) => {
  const [cardData, setCardData] = useState([
    {
      name: "Asol",
      clicked: false,
      src: asol,
    },
    {
      name: "Ashe",
      clicked: false,
      src: ashe,
    },
    {
      name: "Corki",
      clicked: false,
      src: corki,
    },
    {
      name: "Khazix",
      clicked: false,
      src: khazix,
    },
  ]);

  useEffect(() => {
    const initialCards = structuredClone(cardData);
    const shuffled = shuffle(initialCards);
    setCardData(shuffled);
  }, []);

  const setClicked = (name) => {
    const newCards = structuredClone(cardData);
    const theCard = newCards.find((card) => card.name === name);
    theCard.clicked = true;
    // Before we update state, shuffle the cards in order to randomize the board
    const shuffled = shuffle(newCards);
    setCardData(shuffled);
  };

  const resetClicked = () => {
    const newCards = structuredClone(cardData);
    newCards.forEach((card) => {
      card.clicked = false;
    });

    setCardData(newCards);
  };

  return (
    <>
      <div className="bg-black grow p-12">
        <div className="container max-w-fit mx-auto flex flex-wrap bg-black p-4 justify-center">
          {cardData.map((card) => {
            return (
              <Card
                key={card.name}
                name={card.name}
                clicked={card.clicked}
                incrementScore={incrementScore}
                resetScore={resetScore}
                resetClicked={resetClicked}
                setClicked={setClicked}
                src={card.src}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Content;
