import React from "react";
import firstProject from "../../assets/projects/concert-connect.png";
import secondProject from "../../assets/projects/moody.png";
import thirdProject from "../../assets/projects/techposts.png";
import fourthProject from "../../assets/projects/stargazers.png";
import fifthProject from "../../assets/projects/jate.png";
import sixthProject from "../../assets/projects/first-portfolio.png";

export default function Projects() {
  return (
    <div
      id="projects"
      className="grid bg-d-pur gap-10 justify-items-center font-standard font-bold"
    >
      <h1 className="text-6xl text-l-pur text-center">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center pr-4 pl-4 text-center">
        <div className="card md:w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={firstProject} alt="Concert Connect website" />
          </figure>
          <div className="card-body">
            <h1 className="card-title">Concert Connect</h1>
            <p>
              Concert Connect is the new social media for concert goers! 
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://github.com/Sabplpz/Concert-Connect"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary bg-m-pur hover:bg-l-pur border-m-pur hover:border-l-pur"
              >
                Github Repo
              </a>
            </div>
          </div>
        </div>
        <div className="card md:w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={secondProject} alt="Moody Website" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Moody</h2>
            <p>
              A website for people that journal online!
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://github.com/Sabplpz/Moody"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary bg-m-pur hover:bg-l-pur border-m-pur hover:border-l-pur"
              >
                Github Repo
              </a>
            </div>
          </div>
        </div>
        <div className="card md:w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={thirdProject} alt="Tech Posts Website" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tech Posts</h2>
            <p>
              A website for people who like to talk with the Tech community
              about Tech!
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://github.com/Sabplpz/TechPosts"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary bg-m-pur hover:bg-l-pur border-m-pur hover:border-l-pur"
              >
                Github Repo
              </a>
            </div>
          </div>
        </div>
        <div className="card md:w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={fourthProject} alt="StarGazers Website" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">StarGazers</h2>
            <p>
              Do you love the universe and stargazing? Then this website is for
              you!
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://github.com/Sabplpz/StarGazers"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary bg-m-pur hover:bg-l-pur border-m-pur hover:border-l-pur"
              >
                Github Repo
              </a>
              <a
                href="https://sabplpz.github.io/StarGazers"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary bg-m-pur hover:bg-l-pur border-m-pur hover:border-l-pur"
              >
                Deployed Website
              </a>
            </div>
          </div>
        </div>
        <div className="card md:w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={fifthProject} alt="JATE Website" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Just Another Text Editor</h2>
            <p>
              J.A.T.E is for those on the go developers that need an easily
              accessible code editor!
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://github.com/Sabplpz/JATE"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary bg-m-pur hover:bg-l-pur border-m-pur hover:border-l-pur"
              >
                Github Repo
              </a>
            </div>
          </div>
        </div>
        <div className="card md:w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={sixthProject} alt="First Portfolio" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">My First Portfolio!</h2>
            <p>
              You can see my evolution byt taking a look at my very first
              portfolio!
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://github.com/Sabplpz/first-portfolio"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary bg-m-pur hover:bg-l-pur border-m-pur hover:border-l-pur"
              >
                Github Repo
              </a>
              <a
                href="https://sabplpz.github.io/first-portfolio/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary bg-m-pur hover:bg-l-pur border-m-pur hover:border-l-pur"
              >
                Deployed Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
