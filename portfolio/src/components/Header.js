import React from "react";
import logo from "../assets/icons/logo-2.png";
import menu from "../assets/icons/menu.png";
import resume from '../assets/resume/Tech-Resume-SPCL-10302025';
import { useState, useEffect } from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Header({ currentPage, handlePageChange }) {
  const [width, setWidth] = useState(window.innerWidth);

  const breakpoint = 750;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const regularMenu = (
    <div className="navbar text-l-pur bg-d-pur">
      <div className="flex-1">
        <img src={logo} alt="Sabrina's logo" className="h-20"></img>
      </div>
      <div className="">
        <ul className="grid grid-cols-4">
          <li className=" col-start-1 w-32">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className="hover:bg-m-pur hover:border-solid hover:border-2 hover:border-m-pur hover:rounded-md p-4"
            >
              About Me
            </a>
          </li>
          <li className="col-start-2 w-32">
            <a
              href="#blog"
              onClick={() => handlePageChange("Projects")}
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className="hover:bg-m-pur hover:border-solid hover:border-2 hover:border-m-pur hover:rounded-md p-4"
            >
              Projects
            </a>
          </li>
          <li className="col-start-3 w-32">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className="hover:bg-m-pur hover:border-solid hover:border-2 hover:border-m-pur hover:rounded-md p-4"
            >
              Contact
            </a>
          </li>
          <li className="col-start-4 w-32">
            <a
              href={resume} target='_blank'
              className="hover:bg-m-pur hover:border-solid hover:border-2 hover:border-m-pur hover:rounded-md p-4"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  const dropdownMenu = (
    <div className="navbar text-l-pur " >
      <div className="flex-1" >
        <img src={logo} alt="Sabrina's logo" className="h-20"></img>
      </div>
      <div class="dropdown dropdown-end z-50">
        <div
          tabindex="0"
          class="m-1 btn h-20 bg-d-pur"
          onclick="this.parentElement.classList.toggle('dropdown-open');document.activeElement.blur()"
        >
          <img
            src={menu}
            alt="Sabrina's logo"
            className="hover:bg-m-pur hover:border-solid hover:border-2 hover:border-m-pur hover:rounded-md p-4 h-20"
          ></img>
        </div>
        <ul
          tabindex="0"
          class="p-2 shadow menu dropdown-content bg-d-pur rounded-box text-center bg-opacity-80"
        >
          <li
            className=" p-2 col-start-1 w-32"
            onClick={() => {
              if (document.activeElement instanceof HTMLElement) {
                document.activeElement.blur();
              }
            }}
          >
            <a
              onClick={() => handlePageChange("About")}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className="hover:bg-m-pur hover:border-solid hover:border-2 hover:border-m-pur hover:rounded-md p-4"
            >
              About Me
            </a>
          </li>
          <li
            className="p-2 col-start-2 w-32"
            onClick={() => {
              if (document.activeElement instanceof HTMLElement) {
                document.activeElement.blur();
              }
            }}
          >
            <a
              onClick={() => handlePageChange("Projects")}
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className="hover:bg-m-pur hover:border-solid hover:border-2 hover:border-m-pur hover:rounded-md p-4"
            >
              Projects
            </a>
          </li>
          <li
            className="p-2 col-start-3 w-32"
            onClick={() => {
              if (document.activeElement instanceof HTMLElement) {
                document.activeElement.blur();
              }
            }}
          >
            <a
              onClick={() => handlePageChange("Contact")}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className="hover:bg-m-pur hover:border-solid hover:border-2 hover:border-m-pur hover:rounded-md p-4"
            >
              Contact Me
            </a>
          </li>
          <li
            className="p-2 col-start-4 w-32"
            onClick={() => {
              if (document.activeElement instanceof HTMLElement) {
                document.activeElement.blur();
              }
            }}
          >
            <a
              href={resume} target='_blank'
              className="hover:bg-m-pur hover:border-solid hover:border-2 hover:border-m-pur hover:rounded-md p-4"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  return width < breakpoint ? dropdownMenu : regularMenu;
}

export default Header;
