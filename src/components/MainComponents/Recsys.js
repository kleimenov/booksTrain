import React, { useState, useEffect } from "react";

const Recsys = ({ userBooksData, userData }) => {
  const [allBooks, setAllBooks] = useState()
 //console.log(userBooksData) //user book list
 //console.log(userData) //user personal data

 useEffect(() => {
    getAllBooks();
  }, []);

  //it is test of connection with server
  
  const getAllBooks = async () => {
    const response = await fetch("http://localhost:3002/alllibrary");
    const data = await response.json();
    //console.log(data)
    setAllBooks(data);
  };

  console.log(allBooks)
 
  return (
    <div>
      <h5 className="text-secondary py-2">
        Our AI RecSys would like to reccomend fallow books for you { userData.first_name }
        
      </h5>
    </div>
  );
};

export default Recsys;
