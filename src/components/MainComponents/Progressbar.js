import React from "react";

const Progressbar = (leftTime) => {

  const containerStyles = {
    height: 26,
    width: "50%",
    backgroundColor: "#e0e0de",
    borderRadius: 5,
    margin: 1,
  };

  let width = 100 - Math.floor((leftTime.leftTime / 14) * 100);

  const fillerStyles = {
    height: "100%",
    width: `${width}%`,
    backgroundColor: `${width}` < 60 ? "#46b946" : "#f52a2a",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    paddingRight: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div className="progress-bar progress-bar-striped" style={fillerStyles}>
        <span style={labelStyles}>{`${
          100 - Math.floor((leftTime.leftTime / 14) * 100)
        }%`}</span>
      </div>
    </div>
  );
};

export default Progressbar;
