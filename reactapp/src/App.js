import { useEffect, useState } from "react";
import Navi from "./components/Navi";
import List from "./components/List";
import { Container, Spinner } from "reactstrap";

function App(props) {
  const base = "http://hn.algolia.com/api/v1/search_by_date?";
  const [news, setNews] = useState();
  const [param, setParam] = useState(props.p);
  const [url, setUrl] = useState(base + param + "&hitsPerPage=30");

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
    <div className="App">
      <Container className="bg-light border" fluid="md">
        <Navi />
        {!news && <Spinner className="m-5" />}
        {news && <List news={news} />}
      </Container>
    </div>
  );
}

export default App;
