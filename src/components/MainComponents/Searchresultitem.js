import React from "react";
import { Button } from "react-bootstrap";

const Searchresultitem = ({ bookName, bookAuthor }) => {
  return (
    <li className="my-2">
      <div className="d-flex flex-row justify-content-between w-50">
        <h5 className="text-secondary ml-2 pt-2">
          {bookName} / {bookAuthor}{" "}
        </h5>
        <Button className="btn-success p-0 px-1 py-0" type="submit">
          +book
        </Button>
      </div>
    </li>
  );
};

export default Searchresultitem;
