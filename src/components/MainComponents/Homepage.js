import React, { useState, useEffect } from "react";
import axios from "axios";
import Books from "./Books";

const Homepage = (props) => {
  const [books, setBookslist] = useState([]);
  const url = "";

  const url2 = "https://www.googleapis.com/books/v1/volumes?q=bestsellers";
  const [counter, setCOunter] = useState(0);

  useEffect(() => {
    getBooksList();
  }, []);

 
  const getBooksList = async () => {
    const response = await fetch(url2);
    const data = await response.json();

    setBookslist(data.items);
    //console.log(books[1].volumeInfo.title)
  };
  //console.log(books);

  /*
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
        <h3 className="text-secondary">let's find right book for you!</h3>
        {books.map((book) => (
          <Books
            key={book.id}
            image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : ''}
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
      <h3 className="text-secondary">
        Welcome {props.userName}, let's find right book for you!
      </h3>
    </div>
  );
};

export default Homepage;
