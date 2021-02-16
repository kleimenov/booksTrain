import React from "react";
import Searchresultitem from "./Searchresultitem";
import { Button } from "react-bootstrap";
import Searchengine from "./Searchengine";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

const Searchresult = ({ searchResult, setResponse }) => {
  
  const returnHandler = () => {
    setResponse(false)
  }

  return (
    <div>
      <ul className="list-unstyled ">
        {searchResult.map((item) => (
          <Searchresultitem
            key={item.book_id}
            bookName={item.book_name}
            bookAuthor={item.author}
          />
        ))}
      </ul>
      <div className="text-right">
        <Button onClick={returnHandler}
          className="btn-secondary search-button-settings"
          type="submit"
        >
          Try searching again
        </Button>
      </div>
    </div>
  );
};

export default Searchresult;
