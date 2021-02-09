import React, { useState, useEffect }from "react";
import axios from 'axios';

const Homepage = (props) => {

  const [booksList, setBooksList] =useState([])
  const url = "https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699&key=AIzaSyAsjgXclc-8h_dCPaSFIler-zx8pzKPaFY";

  useEffect(() => {
    getBooksList();
  }, []);
  
  const getBooksList =  async () => {
    axios.request(url).then((response) => {
      //console.log(response.data.items[1].volumeInfo.title)
      setBooksList(response.data);
    }).catch((error) => {
      console.error(error);
    })
  };
  
  booksList.map((item )=> {
    console.log(item)
  })
  

  if (!props.token) {
    return (
        <div className="container">
          <h3 className="text-secondary">let's find right book for you!</h3>
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
