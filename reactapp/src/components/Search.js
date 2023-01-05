import React from "react";
import Navi from "./Navi";
import List from "./List";
import SearchBar from "./SearchBar";
import { Container } from "reactstrap";
import { useEffect, useState } from "react";

function Search() {
  const base = "http://hn.algolia.com/api/v1/search_by_date?";
  const [news, setNews] = useState();
  const [param, setParam] = useState();
  const [url, setUrl] = useState();

  useEffect(() => {
    fetch(url, {})
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNews(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="Search">
      <Container className="bg-light border" fluid="md">
        <Navi />
        <SearchBar />
        {news && <List news={news} />}
      </Container>
    </div>
  );
}

export default Search;
