import { useEffect, useState } from "react";
import Card from "./Card";
import shuffle from "../utils/shuffle";

const Content = ({ incrementScore, resetScore }) => {
  const [cardData, setCardData] = useState([
    {
      name: "Kevin",
      clicked: false,
    },
    {
      name: "Ryan",
      clicked: false,
    },
    {
      name: "Colin",
      clicked: false,
    },
    {
      name: "Kate",
      clicked: false,
    },
  ]);

  useEffect(() => {
    const initialCards = structuredClone(cardData);
    const shuffled = shuffle(initialCards);
    setCardData(initialCards);
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
        <div className="container max-w-fit mx-auto flex flex-wrap bg-slate-700 p-4 justify-center">
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
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Content;
