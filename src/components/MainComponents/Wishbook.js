import React from "react";

const Wishbook = ({ bookName, bookAuthor }) => {
    console.log(bookName)
  return (
    <li>
      <h5 className="text-secondary pt-2">
        {bookName} / {bookAuthor}
      </h5>
    </li>
  );
};

export default Wishbook;
