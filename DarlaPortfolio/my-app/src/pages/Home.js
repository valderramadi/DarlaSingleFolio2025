import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../css/Hero.css";
import Hero from "../components/Hero";
import BackgroundVideo from "../assets/techbackground.mp4";
import { ReactTyped } from "react-typed";

function Home() {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [circleVisibility, setCircleVisibility] = useState([false, false, false]);

  useEffect(() => {
    // Show the second line of text after 1.9 seconds
    const timeoutForText = setTimeout(() => {
      setShowSecondLine(true);
    }, 1950);

    // Show the circles 6 seconds after the second line finishes typing
    const timeoutForCircles = setTimeout(() => {
      circleVisibility.forEach((_, index) => {
        setTimeout(() => {
          setCircleVisibility((prevState) => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
          });
        }, index * 1000); // Delay each circle by 1 second
      });
    }, 3000); // Wait 3000 seconds after the text finishes

    return () => {
      clearTimeout(timeoutForText);
      clearTimeout(timeoutForCircles);
    };
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <Hero
        cName="hero"
        heroVideo={BackgroundVideo}
        title={
          <div className="typed-container">
            <ReactTyped
              strings={["Hi, I'm Darla! "]}
              typeSpeed={110}
              backSpeed={50}
              loop={false}
            />
            {showSecondLine && (
              <ReactTyped
                strings={["Welcome"]}
                typeSpeed={125}
                backSpeed={70}
                loop={false}
              />
            )}
          </div>
        }
      />
      {/* New Highlights Section */}
      <div className="highlights-section">
        <div
          className={`highlight-circle ${
            circleVisibility[0] ? "visible" : "hidden"
          }`}
        >
          <span>Passion: Data Storytelling & Music 🎵</span>
        </div>
        <div
          className={`highlight-circle ${
            circleVisibility[1] ? "visible" : "hidden"
          }`}
        >
          <span>Data Scientist | Analyst 💻 </span>
        </div>
        <div
          className={`highlight-circle ${
            circleVisibility[2] ? "visible" : "hidden"
          }`}
        >
          <span>Python, SQL, ML ⚙️ </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
