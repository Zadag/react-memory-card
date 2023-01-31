import Header from "./components/Header";
import Content from "./components/Content";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(score);

  const incrementScore = () => {
    setScore((prevScore) => prevScore + 1);
    if (score >= maxScore) setMaxScore((prevMaxScore) => prevMaxScore + 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header score={score} maxScore={maxScore} />
      <Content
        incrementScore={incrementScore}
        score={score}
        resetScore={resetScore}
      />
    </div>
  );
}

export default App;
