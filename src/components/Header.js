import { useState } from "react";

const Header = ({ score, maxScore }) => {
  return (
    <div className="bg-gray-700 w-full p-8 flex items-center">
      <h1 className="font-bold text-3xl text-gray-300">Header</h1>
      <h2 className="font-bold text-xl text-gray-300 ml-24">
        Current score: {score} Max score: {maxScore}
      </h2>
    </div>
  );
};

export default Header;
