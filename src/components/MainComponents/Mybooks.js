import React, { useEffect, useState } from "react";
import Userbook from "./Userbook";

const Mybooks = ({ myBooks, setMyBooks, userData }) => {
  //console.log(userData.id);
  //const [books, setBookslist] = useState([]);
  useEffect(() => {
    getBooksList();
  }, []);

  const credentials = {
    userId: userData.id,
  };
  const getBooksList = async () => {
    const response = await fetch("http://localhost:3002/userbooks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    setMyBooks(data);
  };
  /*
  const myBooksFetch = async (credentials) => {
    return fetch("http://localhost:3002/userbooks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((response) => response.json());
  };
*/

  //myBooksFetch(data).then((res) => setMyBooks(res));

  //console.log("result on Mybooks " + myBooks[0]);

  /*
  const currentData = new Date()
  const correntTime = new Date().toLocaleString()
  console.log(currentData)
  console.log(currentData.getTime())
  console.log(correntTime)
  */
 
  return (
    <div>
      <h3 className="text-secondary py-2">{userData.first_name} this is your current books list </h3>
      <ul className="list-unstyled">
        {myBooks.map((item) => (
          <Userbook
            key={item.book_id}
            bookName={item.book_name}
            bookAuthor={item.author}
            date ={item.start_date}
          />
        ))}
      </ul>
    </div>
  );
};

export default Mybooks;
