import React from "react";
import firstProject from "../../assets/moody.png";
import secondProject from "../../assets/techposts.png";
import thirdProject from "../../assets/stargazers.png";
import fourthProject from "../../assets/weather-dashboard.png";
import fifthProject from "../../assets/jate.png";
import sixthProject from "../../assets/first-portfolio.png";

export default function Projects() {
  return (
    <div id="projects" className="grid bg-d-pur gap-10 pt-10 justify-items-center">
      <h1 className="text-6xl font-standard font-bold text-l-pur text-center">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center pr-4 pl-4 text-center">
        <div className="card md:w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={firstProject} alt="Moody website" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Moody</h2>
            <p>A website for people that journal online!</p>
            <div className="card-actions justify-end">
              <a
                href="https://github.com/Sabplpz/Moody"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary bg-m-pur hover:bg-l-pur border-m-pur hover:border-l-pur"
              >
                Github Repo
              </a>
              <a
                href="https://tranquil-wildwood-45278.herokuapp.com/login"
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
            <img src={secondProject} alt="Tech Posts Website" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tech Posts</h2>
            <p>
              A website for people who like to talk with the Tech community about
              Tech!
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
              <a
                href="https://afternoon-depths-34986-155d95e5176d.herokuapp.com/"
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
            <img src={thirdProject} alt="Stargazers Website" />
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
            <img src={fourthProject} alt="Weather Dashboard Website" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Weather Dashboard</h2>
            <p>
              Want to check the weather online? Then this website is for you!
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://github.com/Sabplpz/Weather-Dashboard"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary bg-m-pur hover:bg-l-pur border-m-pur hover:border-l-pur"
              >
                Github Repo
              </a>
              <a
                href="https://sabplpz.github.io/Weather-Dashboard/"
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
              <a
                href="https://damp-sea-65701-156be6a47993.herokuapp.com/"
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
