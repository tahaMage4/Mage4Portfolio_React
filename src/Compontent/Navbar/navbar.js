import React, { useState } from "react";
import "./navbar.scss";
import $ from "jquery";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  $(document).ready(function () {
    // Mobile Menu
    $("header").on("click", "nav .fa-bars", function (e) {
      $("header nav > ul").addClass("slide-menu");
    });

    $("header").on("click", "nav  .fa-xmark", function (e) {
      $("header nav > ul").removeClass("slide-menu");
    });
  });
  return (
    <div>
      <header>
        <div class="logo">
          <Link to="/">
            <h2>MAGE 4</h2>
          </Link>
        </div>
        <nav>
          <i className="fa-bars mobile">
            {/* onClick={() => setOpen(true)} */}
            <GiHamburgerMenu />
          </i>
          <ul>
            <i className="fa-xmark mobile">
              <GrClose color="white" />
            </i>

            <li>
              <Link to="about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link to="team">
                <a>Team</a>
              </Link>
            </li>
            {/* <li>
              <a class="d-down" href="#!">
                Drop Down
              </a>
              <ul class="sub-nav">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
              </ul>
            </li> */}
            <li>
              <a href="#!">Contact</a>
            </li>
            <li>
              <a href="#!" class="btn">
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
