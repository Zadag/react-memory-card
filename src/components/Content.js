import { useState } from "react";
import Card from "./Card";

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

  const setClicked = (name) => {
    const newCards = structuredClone(cardData);
    const theCard = newCards.find((card) => card.name === name);
    theCard.clicked = true;
    setCardData(newCards);
  };

  const resetClicked = () => {
    const newCards = structuredClone(cardData);
    newCards.forEach((card) => {
      card.clicked = false;
    });

    console.log(newCards);
    setCardData(newCards);
  };

  return (
    <>
      <div className="bg-black grow p-12">
        <div className="container max-w-fit mx-auto flex flex-wrap bg-slate-700 p-4 justify-center">
          {cardData.map((card) => {
            return (
              <Card
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

  // return (
  //   <div className="bg-black grow p-12">
  //     <div className="container max-w-fit mx-auto flex flex-wrap bg-slate-700 p-4 justify-center">
  //       <Card
  //         name="Kevin"
  //         incrementScore={incrementScore}
  //         score={score}
  //         resetScore={resetScore}
  //       />
  //       <Card
  //         name="Colin"
  //         incrementScore={incrementScore}
  //         score={score}
  //         resetScore={resetScore}
  //       />
  //       <Card
  //         name="Ryan"
  //         incrementScore={incrementScore}
  //         score={score}
  //         resetScore={resetScore}
  //       />
  //       <Card
  //         name="Kate"
  //         incrementScore={incrementScore}
  //         score={score}
  //         resetScore={resetScore}
  //       />
  //     </div>
  //     <h1 className="text-2xl text-purple-700">test</h1>
  //   </div>
  // );
};

export default Content;
