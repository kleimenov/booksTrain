import React from "react";

const News = (props) => {
  return (
      <li className="text-secondary news-list-news">{props.news}</li>
  );
};

export default News;
