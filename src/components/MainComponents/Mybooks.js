import React, { useEffect, useState } from "react";
import Userbook from "./Userbook";
import Recsys from "./Recsys";
import Emptycurrentlist from "./Emptycurrentlist";

const Mybooks = ({ myBooks, setMyBooks, userData }) => {
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

  if (myBooks.length > 0) {
    return (
      <div>
        <h3 className="text-secondary py-2">
          {userData.first_name} this is your current books list
        </h3>
        <ul className="list-unstyled border-bottom border-secondary">
          {myBooks.map((item) => (
            <Userbook
              key={item.book_id}
              bookName={item.book_name}
              bookAuthor={item.author}
              date={item.start_date}
              bookId={item.book_id}
              userId={userData.id}
              getBooksList={getBooksList}
            />
          ))}
        </ul>
        <div>
          <Recsys userBooksData={myBooks} userData={userData} />
        </div>
      </div>
    );
  }
  return <Emptycurrentlist userName={userData.first_name} />;
};

export default Mybooks;
