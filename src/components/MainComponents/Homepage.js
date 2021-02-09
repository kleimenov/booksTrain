import React from "react";

const Homepage = (props) => {
  if (!props.token) {
    return (
      <div className="homepage-background-img">
        <div className="container">
          <h3 className="text-secondary">let's find right book for you!</h3>
        </div>
      </div>
    );
  }
  return (
    <div className="homepage-background-img">
      <div className="container">
        <h3 className="text-secondary">
          Welcome {props.userName}, let's find right book for you!
        </h3>
      </div>
    </div>
  );
};

export default Homepage;
