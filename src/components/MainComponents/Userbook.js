import React from "react";

const Userbook = ({ bookName, bookAuthor }) => {
  return (
    <li className="my-2">
        <h5 className="text-secondary ml-2 pt-2">
          {bookName} / {bookAuthor}{" "}
        </h5>
    </li>
  );
};

export default Userbook;