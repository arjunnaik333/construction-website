import React, { useState } from "react";
import homeimage from "../images/homeimage.jpeg";
import logo from "../images/logo.PNG";
import "./home.css";
import nextimage from "../images/chevron-right-svgrepo-com.svg";
import previousimage from "../images/chevron-left-svgrepo-com.svg";
const Home = () => {
  const [index, setIndex] = useState(0);
  const projects = [homeimage, logo, homeimage];
  const handlenext = () => {
    setIndex(index + 1);
    console.log("");
  };

  const handleprevious = () => {
    setIndex(index - 1);
    console.log("");
  };
  //   setInterval(() => {
  //     handlenext();
  //     console.log("nhvhjv");
  //   }, 30000);

  return (
    <div>
      <article>
        <header>
          <em className="image_text">Construct your dream home</em>
          <em className="image_text2">Eminence Constructions</em>
          <em className="image_text3">&</em>
          <em className="image_text4">Project Management Consultancy....</em>

          <img
            className="home_image"
            width={300}
            height={300}
            src={homeimage}
          />
        </header>
        <div className="image_btn">
          <div>
            <button
              className="prev_btn"
              disabled={index === 0}
              onClick={() => {
                handleprevious();
              }}
            >
              <img
                src={previousimage}
                alt="Previous"
                className="previous_image"
              />
            </button>{" "}
            <button
              className="next_btn"
              disabled={index === projects.length - 1}
              onClick={() => {
                handlenext();
              }}
            >
              <img src={nextimage} alt="Next" className="next_image" />
            </button>
          </div>
          <img className="image_slide" src={projects[index]} />
        </div>
      </article>
    </div>
  );
};

export default Home;
