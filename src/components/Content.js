import Card from "./Card";

const Content = ({ incrementScore, score }) => {
  return (
    <div className="bg-black grow p-12">
      <div className="container max-w-fit mx-auto flex flex-wrap bg-slate-700 p-4 justify-center">
        <Card name="Kevin" incrementScore={incrementScore} score={score} />
        <Card name="Colin" incrementScore={incrementScore} score={score} />
        <Card name="Ryan" incrementScore={incrementScore} score={score} />
        <Card name="Kate" incrementScore={incrementScore} score={score} />
      </div>
    </div>
  );
};

export default Content;
