import React, { useState, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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

 


/*
let slideIndex = 0;
showSlides();


function showSlides() {
  
  let slides = document.getElementsByClassName("books-list-wrapper");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 4000); // Change image every 3 seconds
}
*/
  if (!props.token) {
    return (
      <div className="container">
        <h3 className="text-center text-secondary py-2">Most popular for today!</h3>
        <Carousel>
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
        </Carousel>
        <div>
          <h3 className="text-center text-secondary">Library news!</h3>
        </div>
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
