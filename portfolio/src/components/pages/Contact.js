import React from "react";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import email from "../../assets/icons/email.png";

export default function Contact() {
  return (
    <div
      id="contact"
      className="grid grid-cols-1 items-center bg-d-pur w-full pb-20 justify-items-center font-standard"
    >
      <h1 className="text-6xl text-l-pur text-center font-bold pb-6">Contact Me!</h1>
      <div className="h-20 w-3/4 card">
        <a
          href="https://www.linkedin.com/in/sabrinaplpz/"
          target="_blank"
          rel="noreferrer"
        >
          <ul className="grid grid-cols-12 justify-items-end">
            <li className="bg-m-pur sm:h-24 md:h-20 w-full grid col-start-1 col-end-9 sm:col-end-10 md:col-end-11 lg:col-end-12 rounded-box p-2 justify-items-center items-center text-center text-l-pur">
              <h1 className="xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Want to see more of my professional trajectory? Go to my{" "}
                <strong className="italic font-bold">LinkedIn</strong> !
              </h1>
            </li>
            <li className="col-span-4 sm:col-span-3 md:col-span-2 lg:col-span-1">
              <img
                src={linkedin}
                alt="Sabrina's logo"
                className="h-24 md:h-20"
              ></img>
            </li>
          </ul>
        </a>
      </div>
      <div className="divider"></div>
      <div className="h-20 w-3/4 card">
        <a href="https://github.com/Sabplpz" target="_blank" rel="noreferrer">
          <ul className="grid grid-cols-12 justify-items-start">
            <li className="col-span-4 sm:col-span-3 md:col-span-2 lg:col-span-1">
              <img src={github} alt="Sabrina's logo" className="h-20"></img>
            </li>
            <li className="bg-m-pur h-24 md:h-20 w-full grid col-end-13 col-start-5 sm:col-start-4 md:col-start-3 lg:col-start-2 rounded-box p-2 justify-items-center items-center text-center text-l-pur">
              <h1 className="xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Want to see more of my work and projects? Go to my{" "}
                <strong className="italic font-bold">GitHub</strong> !
              </h1>
            </li>
          </ul>
        </a>
      </div>

      <div className="divider"></div>
      <div className="h-20 w-3/4 card">
        <a
          href="mailto: sabrinaplpz@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <ul className="grid grid-cols-12 justify-items-end">
            <li className="bg-m-pur sm:h-24 md:h-20 w-full grid col-start-1 col-end-9 sm:col-end-10 md:col-end-11 lg:col-end-12 rounded-box p-2 justify-items-center items-center text-center text-l-pur">
              <h1 className="text-sm sm:text-xl md:text-2xl lg:text-3xl">
                For a more direct interaction, please email me to{" "}
                <strong className="italic font-bold">
                  sabrinaplpz@gmail.com
                </strong>{" "}
              </h1>
            </li>
            <li className="col-span-4 sm:col-span-3 md:col-span-2 lg:col-span-1">
              <img src={email} alt="Sabrina's logo" className="h-20"></img>
            </li>
          </ul>
        </a>
      </div>
    </div>
  );
}
