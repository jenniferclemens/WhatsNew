import React from "react";
import { Input } from "reactstrap";
import Filter from "./Filter";

function Filters() {
  const fil = ["stories", "popukarity", "alltime"];
  const selects = {
    stories: ["Stories", "Comments"],
    popularity: ["Popularity", "Date"],
    alltime: [
      "All time",
      "Last 24h",
      "Past Week",
      "Past Month",
      "Past Year",
      "Custom",
    ],
  };
  return (
    <div>
      {Object.entries(selects).forEach((entry) => {
        const [key, value] = entry;
        console.log(value[0]);
        <Input id="exampleSelect" name="select" type="select">
          {value.map((opt) => {
            console.log(opt);
            <option>{opt}</option>;
          })}
        </Input>;

        // <Filter arr={value} />;
      })}
    </div>
  );
}

export default Filters;
