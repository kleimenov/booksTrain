import React from "react";

const Removefromwishlist = () => {
  
  const clickHandler = () => {
    console.log("Xyi");
  };

  return (
    <div>
      <button
        onClick={clickHandler}
        className="btn return-book-button ml-2 px-1 py-0 mt-1 text-white font-weight-bold btn-secondary"
      >
        Remove book
      </button>
    </div>
  );
};

export default Removefromwishlist;
