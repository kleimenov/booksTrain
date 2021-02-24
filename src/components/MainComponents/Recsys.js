import React, { useState, useEffect } from "react";

const Recsys = ({ userBooksData, userData }) => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    const response = await fetch("http://localhost:3002/alllibrary");
    const data = await response.json();
    setAllBooks(data);
  };

  //const trainingData = allBooks.

  const trainData = [];
  const userTrainData = [];
  
  allBooks.map((item) => {
    trainData.push({
      book_id: item.book_id,
      description: item.description,
    });
  });
  userBooksData.map((item) => {
    userTrainData.push({
      book_id: item.book_id,
      description: item.description,
    });
  });

  //console.log(trainData);
  //console.log(userBooksData)
  console.log(userTrainData);

  return (
    <div>
      <h5 className="text-secondary py-2">
        Our AI RecSys would like to reccomend fallow books for you{" "}
        {userData.first_name}
      </h5>
    </div>
  );
};

export default Recsys;
