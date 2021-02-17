import React from "react";

const Returnbook = ({ leftTime }) => {

  let width = 100 - Math.floor((leftTime / 14) * 100);
  const buttonStyles = {
    backgroundColor: `${width}` < 50 ? "#46b946" : "#f52a2a",
  };

  return (
    <div>
      <button className="btn return-book-button ml-2 px-1 py-0 text-white font-weight-bold" style={buttonStyles}>
        Return book
      </button>
    </div>
  );
};

export default Returnbook;
