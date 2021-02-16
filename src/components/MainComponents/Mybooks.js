import { json } from "body-parser";
import React from "react";

const myBooksFetch = async (credentials) => {
    return fetch("http://localhost:3002/booksSearch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }, 
      body: json.stringify(credentials),
    }).then((response) => response.json());
  };

const Mybooks = ({ myBooks, setMyBooks }) => {



  return (
    <div>
      <h3 className="text-secondary">This is Mybooks books page</h3>
    </div>
  );
};

export default Mybooks;
