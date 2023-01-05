import React from "react";
import { Form, Input } from "reactstrap";
import Filters from "./Filters";

function SearchBar() {
  return (
    <Form sm style={{ position: "center" }}>
      <Input
        style={{ width: 200 }}
        bsSize="sm"
        id="query"
        name="search"
        placeholder="Search"
        className="m-2"
      />
      <Input
        style={{ width: 200 }}
        bsSize="sm"
        id="submit"
        type="submit"
        className="m-2"
      >
        Submit
      </Input>
      <Filters />
    </Form>
  );
}

export default SearchBar;
