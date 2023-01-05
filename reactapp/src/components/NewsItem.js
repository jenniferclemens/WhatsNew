import React from "react";

function NewsItem(props) {
  var getLocation = function (href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
  };

  const domain = getLocation(props.item.url);

  return (
    <li style={{ padding: 5 }}>
      <b>
        <a
          href={props.item.url}
          style={{ color: "black", textDecoration: "none" }}
        >
          {props.item.title}
        </a>
      </b>
      &nbsp;
      <small>{domain.hostname == "localhost" ? null : domain.hostname}</small>
      <br />
      <small style={{ color: "#808080" }}>
        {props.item.points} points | By {props.item.author}
      </small>
    </li>
  );
}

export default NewsItem;
