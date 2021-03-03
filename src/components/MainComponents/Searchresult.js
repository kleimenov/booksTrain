import React from "react";
import Searchresultitem from "./Searchresultitem";
import { Button } from "react-bootstrap";
import Searchengine from "./Searchengine";


const Searchresult = ({ searchResult, setResponse, userName, userId }) => {

  const returnHandler = () => {
    setResponse(false);
  };

  const capitalizaResult = (data) => {
    const titleCase = (string) => {
      let splitStr = string.split(" ");
      let newArr = [];
      for (let word of splitStr) {
        word = word.charAt(0).toUpperCase() + word.slice(1);
        newArr.push(word);
      }
      return newArr.join(" ");
    };

    data.map((item) => {
      let tmp = item.book_name.split(" ");
      tmp[0] = tmp[0][0].toUpperCase() + tmp[0].slice(1);
      item.book_name = tmp.join(" ");

      item.author = titleCase(item.author);
    });
  };

  capitalizaResult(searchResult);
 
  return (
    <div>
      <ul className="list-unstyled">
        {searchResult.map((item) => (
          <Searchresultitem 
            key={item.book_id}
            bookName ={item.book_name}
            bookAuthor ={item.author}
            userName = {userName}
            userId={userId}
            bookId={item.book_id}
            bookStatus={item.user_id}
            wishStatus={item.isInWishlist}
          />
        ))}
      </ul>
      <div className="text-right">
        <Button
          onClick={returnHandler}
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
