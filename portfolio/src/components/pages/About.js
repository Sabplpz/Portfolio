import React from "react";

export default function About() {
  return (
    <div
      id="about"
      className="bg-d-pur font-standard p-4 pl-10 pr-10 grid justify-items-center text-center text-l-pur md:pb-24 max-w-screen"
    >
      <div className="grid justify-items-center">
        <h4 className="p-4 ">Hey, my name is </h4>
        <h1 className="font-bold italic text-7xl md:text-8xl">
          Sabrina Centeno
        </h1>
      </div>
      <div className="text-3xl pt-6 ">
        <h1> Full Stack Web Developer</h1>
      </div>
      <div className="text-xl md:text-2xl pt-6 text-center">
        <p>
          I have been in love with coding ever since I can remember, it all
          started with a game when I was about 10 years old, turns out trying to
          create this game by myself was more of a challenge than I expected,
          but I loved every single minute of it. After that experience, I
          decided to reach out to my <strong className="italic font-bold ">Robotics</strong> school team, in which I found out
          my love was for software rather than hardware. Since my school
          specialized in technical degrees, it allowed me to continue to learn
          about programming principles and technologies. <br></br> In the past
          few years, I have dedicated to immersing myself in the world of
          coding.
          <br></br>
          My time in
          <strong className="italic font-bold ">
            {" "}
            University of Central Florida{" "}
          </strong>{" "}
          has been one of the most successful of it all.<br></br>
          From mastering simple{" "}
          <strong className="italic font-bold ">
            HTML, CSS and Javascript
          </strong>{" "}
          to building projects with a{" "}
          <strong className="italic font-bold ">MERN stack</strong>, I have been
          able to get proficient with various enviroments, frameworks, libraries and databases such as the below: 
          <div className="grid w-full justify-items-center p-2">
          <ul className="italic font-bold grid grid-cols-2 w-64 gap-2">
            <li>Javascript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>TailwindCSS</li>
            <li>daisyUI</li>
          </ul>
          </div>
          In my portfolio, you have access to my Projects, which demonstrate the{" "}
          <strong className="italic font-bold ">multiple skills</strong> I have
          gained through out my life, as well as my Resume and Contact
          information. Please feel free to hang around!
        </p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
}
