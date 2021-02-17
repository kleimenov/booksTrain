import React from "react";

const Books = (props) => {
  return (
    <div className="books-list-wrapper">
      <img src={props.image} alt="" className="book-img" />
      <div className="book-desc text-secondary">
        <h4 className="text-white book-title text-left">{props.title} </h4>
        <span>{props.author}</span>
        <p>Published: {props.desc}</p>
      </div>
    </div>
  );
};

export default Books;
