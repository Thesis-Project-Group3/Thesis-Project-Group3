//import used technologies
import React from "react";
import { Link, Redirect } from "react-router-dom";

//import CSS
import "./NavBar.css";

//import used files

//create NavBar Compo
class NavBar extends React.Component {
  state = {};

  //render NavBar Compo
  render() {
    return (
      <div className="NavBar__div">
        <nav className="nav">
          <div className="container">
            <div className="logo">
              <span>Ra7a</span>
            </div>
            <div className="main_list" id="mainListDiv">
              <ul>
                <Link to="/signUp">
                  <li>Sign Up </li>
                </Link>
                <Link to="/signIn">
                  <li>Sign in </li>
                </Link>
                <Link to="/about">
                  <li>About Us </li>
                </Link>
                <Link to="/contact">
                  <li>Contact Us</li>
                </Link>
                <Link to="/">
                  <li>Logout</li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

//export compo
export default NavBar;

//Check and vaildate