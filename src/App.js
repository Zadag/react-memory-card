import Header from "./components/Header";
import Content from "./components/Content";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(score);

  const incrementScore = () => {
    setScore(score + 1);
    if (score >= maxScore) setMaxScore(maxScore + 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header score={score} maxScore={maxScore} />
      <Content incrementScore={incrementScore} score={score} />
      <button onClick={resetScore}>Reset Score</button>
    </div>
  );
}

export default App;
