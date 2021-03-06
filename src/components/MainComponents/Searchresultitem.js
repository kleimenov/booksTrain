import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Searchresultitem = ({
  bookName,
  bookAuthor,
  userName,
  bookId,
  userId,
  bookStatus,
  wishStatus
}) => {

  const [status, setStatus] = useState(bookStatus ? true : false);
  const [whoRead, setReader] = useState(bookStatus);
  const [userWish, setUserWish] = useState(wishStatus)

  const addBook = async (credientials) => {
    const response = await fetch("http://localhost:3002/addbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credientials),
    });
    const data = await response.json();
  };

  const addReadingList = () => {
    if (!status) {
      addBook({ 
        userId: userId,
        bookId: bookId,
        userName: userName,
        unixTime: new Date().getTime(),
      });
      setStatus(!status);
      setReader(userId);
    }
    console.log("This book is already added");
  };

  const addBookWishList = async (credientials) => {
    const response = await fetch("http://localhost:3002/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credientials),
    });
    const data = await response.json();
  };

  
  const addWishList = () => {
    addBookWishList({
      userId: userId,
      bookId: bookId,
      unixTime: new Date().getTime(),
    });
    setUserWish(!userWish)
  };

  if (!status) {
    return (
      <li className="my-2">
        <div className="search-wrapper">
          <h5 className="text-secondary ml-2 pt-2">
            {bookName} / {bookAuthor}{" "}
          </h5>
          <Button
            onClick={addReadingList}
            className="btn-success p-0 px-1 py-0 ml-1"
            type="submit"
          >
            +book
          </Button>
        </div>
      </li>
    );
  }
  if (userId === whoRead) {
    return (
      <li className="my-2">
        <div className="search-wrapper">
          <h5 className="text-secondary ml-2 pt-2">
            {bookName} / {bookAuthor} / in your reading list
          </h5>
        </div>
      </li>
    );
  }
  if (userWish) {
    return (
      <li className="my-2">
        <div className="search-wrapper">
          <h5 className="text-secondary ml-2 pt-2">
            {bookName} / {bookAuthor} / in your wish list
          </h5>
        </div>
      </li>
    );
  }
  return (
    <li className="my-2">
      <div className="search-wrapper">
        <h5 className="text-secondary ml-2 pt-2">
          {bookName} / {bookAuthor}{" "}
        </h5>
        <Button
          onClick={addWishList}
          className="btn-warning p-0 px-1 py-0 ml-2"
          type="submit"
        >
          +add to wish list
        </Button>
      </div>
    </li>
  );
};

export default Searchresultitem;
