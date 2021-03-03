import React from "react";
import Removefromwishlist from "./Removefromwishlist";
import { toCapitalize } from "./Handlers";

const Wishbook = ({ bookName, bookAuthor, bookId, userId, getWishlist }) => {
  console.log(bookName);
  return (
    <li>
      <div className="d-flex flex-row justify-content-between w-50">
        <h5 className="text-secondary pt-1">
          {toCapitalize(bookName)} / {toCapitalize(bookAuthor)} /{" "}
        </h5>
        <Removefromwishlist />
      </div>
    </li>
  );
};

export default Wishbook;
