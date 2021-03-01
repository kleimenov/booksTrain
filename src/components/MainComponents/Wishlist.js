import React from "react";

const Wishlist = ({ userData }) => {
  console.log(userData)
  return (
    <div>
      <h3 className="text-secondary py-2">
        {userData.first_name} this is your wish list
      </h3>
    </div>
  );
};

export default Wishlist;
