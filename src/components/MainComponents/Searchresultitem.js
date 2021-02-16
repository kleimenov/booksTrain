import React from "react";
import { Button } from "react-bootstrap";

const Searchresultitem = ({ bookName, bookAuthor }) => {
  return (
    <li className="my-2">
      <div className="d-flex flex-row">
        <Button className="btn-success p-0 px-1" type="submit">
          +book
        </Button>
        <h5 className="text-secondary ml-2 pt-2">
          {bookName} / {bookAuthor}{" "}
        </h5>
      </div>
    </li>
  );
};

export default Searchresultitem;
