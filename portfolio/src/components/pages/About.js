import React from "react";

export default function About() {
  return (
    <div
      id="about"
      className="bg-d-pur font-standard p-4 pl-10 pr-10 grid justify-items-center text-center text-l-pur md:-mt-32 lg:-mt-48"
    >
      <div className="grid justify-items-center">
        <h4 className="p-4">Hey, my name is </h4>
        <h1 className="font-bold italic text-8xl">Sabrina Centeno</h1>
      </div>
      <div className="text-3xl pt-6">
        <h1> Full Stack Web Developer</h1>
      </div>
      <div className="text-2xl pt-6 text-center">
        <p>
          I have been in love with coding ever since I can remember. In the past
          few years, I have dedicated my time to deep learning coding.<br></br>
          My time in
          <strong className="italic font-bold">
            {" "}
            University of Central Florida{" "}
          </strong>{" "}
          has been the most successful of it all.<br></br>
          From learning simple{" "}
          <strong className="italic font-bold">
            HTML, CSS and Javascript
          </strong>{" "}
          to building projects with a{" "}
          <strong className="italic font-bold">MERN stack</strong>, I have been
          able to get proficient with various enviroments, frameworks and
          libraries.<br></br>
          In my portfolio, you have access to my Projects, which demonstrate my{" "}
          <strong className="italic font-bold">multiple skills</strong>, as well
          as my Resume and Contact information.<br></br>
          Please feel free to hang around!
        </p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
}
