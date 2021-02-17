import React from "react";

const Userbook = ({ bookName, bookAuthor }) => {
  /*
  const capitalizaResult = (data) => {
    const titleCase = (string) => {
      let splitStr = string.split(' ');
      let newArr = [];
      for (let word of splitStr) {
        word = word.charAt(0).toUpperCase() + word.slice(1);
        newArr.push(word)
      }
      return newArr.join(' ');
    }

    data.map((item) => {
      let tmp = item.book_name.split(" ");
      tmp[0] = tmp[0][0].toUpperCase() + tmp[0].slice(1);
      item.book_name = tmp.join(" ");

      item.author = titleCase(item.author)
    });
  };
  */
  

  return (
    <li className="my-2">
        <h5 className="text-secondary pt-2">
          {bookName} / {bookAuthor}{" "}
        </h5>
    </li>
  );
};

export default Userbook;