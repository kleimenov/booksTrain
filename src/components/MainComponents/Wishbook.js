import React from "react";
import { toCapitalize } from "./Handlers"

const Wishbook = ({ bookName, bookAuthor }) => {
    console.log(bookName)
  return (
    <li>
      <h5 className="text-secondary pt-2">
      {toCapitalize(bookName)} / {toCapitalize(bookAuthor)} /{" "}
      </h5>
    </li>
  );
};

export default Wishbook;
