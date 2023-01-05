import React from "react";
import NewsItem from "./NewsItem";

function List(props) {
  return (
    <div>
      <ol>
        {
          // console.log(props.news.hits[0].title)
          props.news.hits.map((article) => {
            return <NewsItem item={article} />;
          })
        }
      </ol>
    </div>
  );
}

export default List;
