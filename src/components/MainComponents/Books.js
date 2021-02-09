import React from "react";

const Books = (props) => {
  return (
    <li className="books-list-wrapper">
      <img src={props.image} alt="" className="book-img"/>
      <div className="book-desc text-secondary">
        <h4>Title: {props.title} </h4>
        <span>{props.author}</span>
        <p>Published: {props.desc}</p>
      </div>
    </li>
  );
};

export default Books;
