import React, { useEffect, useState } from "react";

const myBooksFetch = async (credentials) => {
  return fetch("http://localhost:3002/userbooks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((response) => response.json());
};

const Mybooks = ({ myBooks, setMyBooks, userData }) => {
  console.log(userData.id);

  const userBooks = myBooksFetch({
    userId: userData.id,
  }).then(res => setMyBooks(res));
  
  console.log('result on Mybooks ' +myBooks);

  return (
    <div>
      <h3 className="text-secondary">{userData.first_name} books page </h3>
    </div>
  );
};

export default Mybooks;
