import React from "react";
import Removefromwishlist from "./Removefromwishlist";
import { toCapitalize } from "./Handlers";

const Wishbook = ({ bookName, bookAuthor, bookId, userId, getWishlist }) => {
  return (
    <li>
      <div className="d-flex flex-row justify-content-between w-50">
        <h5 className="text-secondary pt-1">
          {toCapitalize(bookName)} / {toCapitalize(bookAuthor)} /{" "}
        </h5>
        <Removefromwishlist
          bookId={bookId}
          userId={userId}
          getWishlist={getWishlist}
        />
      </div>
    </li>
  );
};

export default Wishbook;
