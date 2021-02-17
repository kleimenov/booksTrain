import React from "react";

const Userbook = ({ bookName, bookAuthor, date }) => {

 let unixTime = parseInt(date)




 const toCapitalize = (string) => {
  let splitStr = string.split(' ');
  let newArr = [];
  for (let word of splitStr) {
    if(word.length > 1) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
      newArr.push(word)
    } else {newArr.push(word)}
  }
  return newArr.join(' ');
}

  return (
    <li className="my-2">
        <h5 className="text-secondary pt-2">
          {toCapitalize(bookName)} / {toCapitalize(bookAuthor) } / { unixTime }
        </h5>
    </li>
  );
};

export default Userbook;