import React from "react";
import logo from "../assets/LOGO.png";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Header({ currentPage, handlePageChange }) {
  return (
    <ul className="grid grid-cols-12 justify-items-end items-center text-l-pur bg-d-pur h-20">
      <li className="w-96 col-start-1 col-end-4">
        <img src={logo} alt="Sabrina's logo" className="h-20"></img>
      </li>
      <li className="w-32 col-start-9 col-end-10">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className="hover:bg-m-pur hover:border-solid hover:border-2 hover:border-m-pur hover:rounded-md p-4"
        >
          About Me
        </a>
      </li>
      <li className="w-32 col-start-10 col-end-11">
        <a
          href="#blog"
          onClick={() => handlePageChange("Projects")}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className="hover:bg-m-pur hover:border-solid hover:border-2 hover:border-m-pur hover:rounded-md p-4"
        >
          Projects
        </a>
      </li>
      <li className="w-32 col-start-11 col-end-12">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className="hover:bg-m-pur hover:border-solid hover:border-2 hover:border-m-pur hover:rounded-md p-4"
        >
          Contact
        </a>
      </li>
      <li className="w-32 col-start-12 col-end-13">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className="hover:bg-m-pur hover:border-solid hover:border-2 hover:border-m-pur hover:rounded-md p-4"
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Header;
