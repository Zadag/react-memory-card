const Card = ({
  incrementScore,
  resetScore,
  resetClicked,
  setClicked,
  card,
}) => {
  const { name, clicked, src } = card;
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
      <div className="bg-stone-600 shadow-lg p-4 rounded-xl">
        <p>{name}</p>
        <img src={src} alt="Ashe" className="w-60 rounded-xl shadow-2xl"></img>
      </div>
    </div>
  );
};

export default Card;
