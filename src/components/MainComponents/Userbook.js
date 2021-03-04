import React from "react";
import Progressbar from "./Progressbar";
import Returnbook from "./Returnbook"; 
import {countdounTime, toCapitalize} from "./Handlers"

const Userbook = ({
  bookName,
  bookAuthor,
  date,
  bookId,
  userId,
  getBooksList,
}) => {
  
  const leftTime = countdounTime(date);

  return (
    <li className="my-2">
      <h5 className="text-secondary pt-2">
        {toCapitalize(bookName)} / {toCapitalize(bookAuthor)} /{" "}
        <span
          className={
            countdounTime(date) > 5
              ? "text-success h6 font-italic"
              : "text-danger h6 font-italic"
          }
        >
          {countdounTime(date) > 1
            ? `You have ${countdounTime(
                date
              )} days till the end of reading term`
            : `You have ${countdounTime(date)} one day the end of reading term`}
        </span>
      </h5>
      <div className="userbook-stats-tool">
        <Progressbar leftTime={leftTime} />
        <Returnbook
          leftTime={leftTime}
          bookId={bookId}
          userId={userId} 
          getBooksList={getBooksList}
        />
      </div>
    </li>
  );
};

export default Userbook;
