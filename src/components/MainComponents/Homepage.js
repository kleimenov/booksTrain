import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import axios from "axios";
import Books from "./Books";
import Searchengine from "./Searchengine";
import News from "./Newshomepage";
import Clock from "./Clock";
import Searchresult from "./Searchresult";



const Homepage = (props) => {
  const [books, setBookslist] = useState([]);
  const [news, setNews] = useState([]);
  const [searchResponse, setResponse] = useState(false);

  const url = "https://www.googleapis.com/books/v1/volumes?q=Orwell";

  useEffect(() => {
    getBooksList();
    getAllNewsFromDatabase();
  }, []);

  const getBooksList = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setBookslist(data.items);
  };


  const getAllNewsFromDatabase = async () => {
    const response = await fetch("http://localhost:3002/news");
    const data = await response.json();
    setNews(data);
  };


  const returnHandler = () => {
    setResponse(false);
  };

  if (!props.token) {
    return (
      <div>
        <div className="start-page">
          <h3 className="start-page-header-text">Most popular for today!</h3>
          <Clock date={new Date()} />
        </div>
        <div className="carouselHolder">
          <Carousel showThumbs={false} /*autoPlay*/>
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
        </div>
        <div>
          <h3 className="start-page-news-text">Library news!</h3>
          <ul className="newscontainer">
            {news.map((artical) => (
              <News key={artical.news_id} news={artical.news_text} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
  if (searchResponse == []) {
    return (
      <div>
        <h3 className="text-center text-secondary py-2">
          Welcome {props.userName}, let's find right book for you!
        </h3>
        <Searchengine
          {...props}
          userId={props.userId}
          searchResponse={searchResponse}
          setResponse={setResponse}
        />
      </div>
    );
  }
  if (searchResponse.length > 0) {
    return (
      <div>
        <h4 className="text-center text-secondary py-2">
          {props.userName}, this is result of your search...
        </h4>
        <Searchresult
          searchResult={searchResponse}
          setResponse={setResponse}
          userName={props.userName}
          userId={props.userId}
        />
      </div>
    );
  } else {
    return (
      <div>
        <h4 className="text-center text-secondary py-2">
          {props.userName}, Sorry I didn't find anything..
        </h4>
        <Button
          onClick={returnHandler}
          className="btn-secondary search-button-settings"
          type="submit"
        >
          Try searching again
        </Button>
      </div>
    );
  }
};

export default Homepage;
