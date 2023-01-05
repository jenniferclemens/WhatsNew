import React from "react";
import { Navbar, NavbarBrand, NavLink } from "reactstrap";

function Navi() {
  return (
    <Navbar style={{ backgroundColor: "#fc651e" }}>
      <NavbarBrand href="/" style={{ color: "black" }}>
        <img
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/1200px-Y_Combinator_logo.svg.png"
          style={{
            height: 35,
            width: 35,
          }}
        />
        <b>What's New</b>
      </NavbarBrand>
      <NavLink href="/new" style={{ color: "black" }}>
        new
      </NavLink>
      <NavLink href="/past" style={{ color: "black" }}>
        past
      </NavLink>
      <NavLink href="/comments" style={{ color: "black" }}>
        comments
      </NavLink>
      <NavLink href="/ask" style={{ color: "black" }}>
        ask
      </NavLink>
      <NavLink href="/show" style={{ color: "black" }}>
        show
      </NavLink>
      <NavLink href="/jobs" style={{ color: "black" }}>
        jobs
      </NavLink>
    </Navbar>
  );
}

export default Navi;
