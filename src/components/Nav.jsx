/** @format */

import React from "react";
import { Navbar } from "react-bootstrap";
function Nav() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="http://dianedoumenge.com/img/indeed.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Search for jobs
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Nav;
