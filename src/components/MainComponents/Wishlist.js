import React, { useState, useEffect } from "react";
import Wishbook from "./Wishbook";


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

  console.log(myWishlist);

  return (
    <div>
      <h3 className="text-secondary py-2">
        {userData.first_name} this is your wish list
      </h3>
      <ul className="list-unstyled">
        {myWishlist.map((item) => (
          <Wishbook
          key={item.book_id}
          bookName={item.book_name}
          bookAuthor={item.author}
          bookId={item.book_id}
          userId={item.user_id}
        />
      ))}
      </ul>
    </div>
  );
};

export default Wishlist;
