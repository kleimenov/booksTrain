import React from "react";

const Emptywishlist = ({userName}) => {
  return (
    <div>
      <h3 className="text-secondary py-2">
        {userName} your current wish list is empty
      </h3>
      <ul className="list-unstyled"></ul>
    </div>
  );
};

export default Emptywishlist;