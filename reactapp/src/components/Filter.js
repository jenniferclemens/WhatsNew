import React from "react";
import { Input } from "reactstrap";

function Filter(props) {
  return (
    <div>
      Hi
      <Input id="exampleSelect" name="select" type="select">
        {props.arr.map((opt) => {
          console.log(opt);
          <option>{opt}</option>;
        })}
      </Input>
    </div>
  );
}

export default Filter;
