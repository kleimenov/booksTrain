import React from "react";

const Returnbook = ({ leftTime, userId, bookId, getBooksList }) => {



  let width = 100 - Math.floor((leftTime / 14) * 100);
  const buttonStyles = {
    backgroundColor: `${width}` < 50 ? "#46b946" : "#f52a2a",
  };

  const returnBook = async (credentils) => {
    const response = await fetch("http://localhost:3002/returnbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentils),
    });
    const data = await response.json();
  };


  const clickHandler = () => {
    
    returnBook({
      userId: userId,
      bookId: bookId,
    });
    getBooksList({userId: userId});
  };
  
  return (
    <div>
      <button
        onClick={clickHandler}
        className="btn return-book-button ml-2 px-1 py-0 text-white font-weight-bold"
        style={buttonStyles}
      >
        Return book
      </button>
    </div>
  );
};

export default Returnbook;
