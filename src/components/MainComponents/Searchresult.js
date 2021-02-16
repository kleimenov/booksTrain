import React from "react";
import Searchresultitem from "./Searchresultitem";

const Searchresult = ({ searchResult }) => {
  
    return (
    <div className="container">
      <ul className="list-unstyled ">
        {searchResult.map((item) => (
          <Searchresultitem
            key={item.book_id}
            bookName={item.book_name}
            bookAuthor={item.author}
          />
        ))}
      </ul>
    </div>
  );
};

export default Searchresult;
