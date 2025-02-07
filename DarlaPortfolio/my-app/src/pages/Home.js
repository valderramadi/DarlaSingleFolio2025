import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../css/Hero.css";
import Hero from "../components/Hero";
import { ReactTyped } from "react-typed";

import musicDS from '../assets/icons/musicDS.svg';
import coffeeLove from '../assets/icons/coffeelove.svg';
import dS from '../assets/icons/DS.svg';


function Home() {
  const [circleVisibility, setCircleVisibility] = useState([false, false, false]);
  useEffect(() => {
    const timeoutForCircles = setTimeout(() => {
      circleVisibility.forEach((_, index) => {
        setTimeout(() => {
          setCircleVisibility((prevState) => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
          });
        }, index * 1000); // here we are just delaying each circle by 1 sec
      });
    }, 3000); // then it waits about 3 sec before starting circle animations

    return () => clearTimeout(timeoutForCircles);
  }, []);


  return (
    <div className="home-container">
      <Navbar />
      <Hero
        cName="hero"
        title={
          <div className="typed-container">
            <ReactTyped
              strings={["Hi, I'm Darla!<br />Welcome"]} 
              typeSpeed={110}
              backSpeed={50}
              loop={false}
              smartBackspace={true}
            />
          </div>
        }
      />
      {/* added new highlights section below */}
      <div className="highlights-section">
        <div
          className={`highlight-circle ${
            circleVisibility[0] ? "visible" : "hidden"
          }`}
        >
          <span>Passions: Music, Fashion, Coffee </span>
          <img src={coffeeLove} alt="coffee love" className="highlight-icon coffee-icon" />
        </div>
        <div
          className={`highlight-circle ${
            circleVisibility[1] ? "visible" : "hidden"
          }`}
        >
          <span>Data Scientist | Analyst </span>
          <img src={dS} alt="data science" className="highlight-icon" />
        </div>
        <div
          className={`highlight-circle ${
            circleVisibility[2] ? "visible" : "hidden"
          }`}
        >
          <span> Data Storytelling & Machine Learning</span>
          <img src={musicDS} alt="music DS" className="highlight-icon" />
        </div>
      </div>
    </div>
  );
}

export default Home;
