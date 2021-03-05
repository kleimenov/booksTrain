import React from "react";

const Removefromwishlist = ({ userId, bookId, getWishlist }) => {
  const removeBookWishlist = async (credentials) => {
    const response = await fetch("http://localhost:3002/removebookwishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    getWishlist({ userId: userId });
  };

  const clickHandler = () => {
    removeBookWishlist({
      userId: userId,
      bookId: bookId,
    });
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
