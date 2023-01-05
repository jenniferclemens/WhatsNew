import React from "react";
import NewsItem from "./NewsItem";

function List(props) {
  return (
    <div>
      <ol start={props.page * 30 + 1}>
        {
          // console.log(props.news.hits[0].title)
          props.news.hits.map((article) => {
            return <NewsItem item={article} />;
          })
        }
      </ol>
      <center>
        <p>
          Page No. {props.news.nbPages !== 0 ? props.page + 1 : 0} /{" "}
          {props.news.nbPages}
        </p>
        {props.page !== 0 && <button onClick={props.back}>Back</button>}

        {props.page < props.news.nbPages - 1 && (
          <button onClick={props.next}>Next</button>
        )}
      </center>
    </div>
  );
}

export default List;
