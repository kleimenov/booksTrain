import React from "react";
import { Button } from "react-bootstrap";

const Searchresultitem = ({ bookName, bookAuthor, userName, bookId }) => {

  const addBook = async (credientials) => {
    const response = await fetch("http://localhost:3002/addbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credientials),
    })
    const data = await response.json();
    //console.log('Xyi on front ' +data)
  }
  

  const clickHandler = () => {

    addBook({
      bookId: bookId,
      userName: userName,
      unixTime: new Date().getTime()
    })

  }
  /*
  const credentials = {
    userId: userData.id,

  };
  const getBooksList = async () => {
    const response = await fetch("http://localhost:3002/addbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    setMyBooks(data);
  };
*/
  return (
    <li className="my-2">
      <div className="d-flex flex-row justify-content-between w-50">
        <h5 className="text-secondary ml-2 pt-2">
          {bookName} / {bookAuthor}{" "}
        </h5>
        <Button onClick={clickHandler} className="btn-success p-0 px-1 py-0" type="submit">
          +book
        </Button>
      </div>
    </li>
  );
};

export default Searchresultitem;
