import React from "react";

const Returnbook = ({ leftTime, userId, bookId, getBooksList }) => {
  let width = 100 - Math.floor((leftTime / 14) * 100);
  const buttonStyles = {
    backgroundColor: `${width}` < 50 ? "#46b946" : "#f52a2a",
  };

  const returnBook = async (credentials) => {
    const response = await fetch("http://localhost:3002/returnbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    getBooksList({ userId: userId });
  };

  const clickHandler = () => {
    returnBook({
      userId: userId,
      bookId: bookId,
    });
  };

  return (
    <div>
      <button
        onClick={clickHandler}
        className="btn return-book-button"
        style={buttonStyles}
      >
        Return book
      </button>
    </div>
  );
};

export default Returnbook;
