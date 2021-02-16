import React, { useState, useEffect } from "react";
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

  const url = "";
  const url2 = "https://www.googleapis.com/books/v1/volumes?q=Orwell";

  useEffect(() => {
    getBooksList();
    getAllNewsFromDatabase();
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

  const getAllNewsFromDatabase = async () => {
    const response = await fetch("http://localhost:3002/news");
    const data = await response.json();
    setNews(data);
  };

  if (!props.token) {
    return (
      <div>
        <div className="d-flex flex-row justify-content-around align-items-center py-2">
          <h3 className="text-center text-secondary">
            Most popular for today!
          </h3>
          <Clock date={new Date()} />
        </div>
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
        <div>
          <h3 className="text-center text-secondary mt-4">Library news!</h3>
          <ul className="newscontainer py-2">
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
          searchResponse={searchResponse}
          setResponse={setResponse}
        />
      </div>
    );
  }
  return (
    <div>
      <h4 className="text-center text-secondary py-2">
        {props.userName}, this is result of your search...
      </h4>
      {searchResponse.length > 0 ? (
        <Searchresult searchResult={searchResponse} />
      ) : (
        <h4 className="text-secondary">
          I am afraid I didn't find anything for you......
        </h4>
      )}
    </div>
  );
};

export default Homepage;
