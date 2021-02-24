import React from "react";
import Progressbar from "./Progressbar";
import Returnbook from "./Returnbook";

const Userbook = ({ bookName, bookAuthor, date }) => {
  
  const countdounTime = (date) => {
    const readingTerm = 14;
    const startUnixTime = parseInt(date);
    const currentuUixTime = new Date().getTime();
    const unixDiff = currentuUixTime - startUnixTime;
    return readingTerm - Math.floor(unixDiff / (1000 * 60 * 60) / 24);
  
  };

  const toCapitalize = (string) => {
    let splitStr = string.split(" ");
    let newArr = [];
    for (let word of splitStr) {
      if (word.length > 1) {
        word = word.charAt(0).toUpperCase() + word.slice(1);
        newArr.push(word);
      } else {
        newArr.push(word);
      }
    }
    return newArr.join(" ");
  };

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
      <div className="d-flex flex-row">
        <Progressbar leftTime={leftTime} />
        <Returnbook leftTime={leftTime} />
      </div>
    </li>
  );
};

export default Userbook;
