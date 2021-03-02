import React, { useState, useEffect } from "react";

const Wishlist = ({ userData }) => {

  const [myWishlist, setmyWishlist] = useState([]);

  useEffect(() => {
    getWishlist();
  }, []); 

  const credentials = {
    userId: userData.id,
  };
  const getWishlist = async () => {
    const response = await fetch("http://localhost:3002/allwishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    setmyWishlist(data);
  };




  return (
    <div>
      <h3 className="text-secondary py-2">
        {userData.first_name} this is your wish list
      </h3>
    </div>
  );
};

export default Wishlist; 
