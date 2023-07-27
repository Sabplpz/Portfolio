import React from "react";
import firstProject from '../../assets/email.png';
import secondProject from "../../assets/techposts";
import thirdProject from "../../assets/stargazers";
import fourthProject from "../../assets/weather-dashboard";
import fifthProject from "../../assets/note-taker";
import sixthProject from "../../assets/first-portfolio";

export default function Projects() {
  return (
    <div className="">
      <h1>Work</h1>
      <div className="grid grid-cols-3">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={firstProject} alt="Moody website" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Moody</h2>
            <p>A website for people that journal online!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Github Repo</button>
              <button className="btn btn-primary">Deployed Website</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={secondProject} alt="Tech Posts Website" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tech Posts</h2>
            <p>
              Awebsite for people who like to talk with the Tech community about
              Tech!
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Github Repo</button>
              <button className="btn btn-primary">Deployed Website</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
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
              <button className="btn btn-primary">Github Repo</button>
              <button className="btn btn-primary">Deployed Website</button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={fourthProject} alt="Weather Dashboard Website" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Weather Dashboard</h2>
            <p>
              Want to check the weather online? Then this website is for you!
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Github Repo</button>
              <button className="btn btn-primary">Deployed Website</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={fifthProject} alt="Note Taker Website" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Note Taker</h2>
            <p>Do you need an easy access note pad? Try this Note Taker!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Github Repo</button>
              <button className="btn btn-primary">Deployed Website</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
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
              <button className="btn btn-primary">Github Repo</button>
              <button className="btn btn-primary">Deployed Website</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
