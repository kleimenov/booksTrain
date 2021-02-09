import React, { useState, useEffect } from "react";
//import axios from "axios";
import Books from "./Books";

const Homepage = (props) => {
  const [books, setBookslist] = useState([]);
  const url = "";
  const url2 =
    "https://www.googleapis.com/books/v1/volumes?q=categories=Pratchet";

  useEffect(() => {
    getBooksList();
  }, []);

  const getBooksList = async () => {
    const response = await fetch(url2);
    const data = await response.json();

    setBookslist(data.items);
  };

  /*
  // Just in case if I would like to use axios
  const getBooksList =  async () => {
    axios.request(url).then((response) => {
      setBookslist(response.data.items);
      //response.data.items.map((item)=> {console.log(item)})
    }).catch((error) => {
      console.error(error);
    })
  };
 */

  if (!props.token) {
    return (
      <div className="container">
        <h3 className="text-center text-secondary py-2">Most popular for today!</h3>
        {books.splice(0, 5).map((book) => (
          <Books
            key={book.id}
            image={
              book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.smallThumbnail
                : ""
            }
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            desc={book.volumeInfo.publishedDate}
          />
        ))}
      </div>
    );
  }
  return (
    <div className="container">
      <h3 className="text-center text-secondary py-2">
        Welcome {props.userName}, let's find right book for you!
      </h3>
    </div>
  );
};

export default Homepage;
