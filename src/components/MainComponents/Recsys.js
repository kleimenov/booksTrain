import React from "react";

const Recsys = ({ userBooksData, userData }) => {

 //console.log(userBooksData) //user book list
 //console.log(userData) //user personal data

 
 
  return (
    <div>
      <h5 className="text-secondary py-2">
        Our AI RecSys would like to reccomend fallow books for you { userData.first_name }
      </h5>
    </div>
  );
};

export default Recsys;
