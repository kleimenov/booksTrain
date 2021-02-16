import React from "react";
import Searchresultitem from "./Searchresultitem";

const Searchresult = ({ searchResult }) => {
  return (
      <ul className="list-unstyled ">
        {searchResult.map((item) => (
          <Searchresultitem
            key={item.book_id}
            bookName={item.book_name}
            bookAuthor={item.author}
          />
        ))}
      </ul>
  );
};

export default Searchresult;
