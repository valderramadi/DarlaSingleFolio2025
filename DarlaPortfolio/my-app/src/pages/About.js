// import React from 'react';
// import Hero from '../components/Hero';
// import Navbar from '../components/Navbar';
// import '../css/Hero.css'
// import AboutImg from '../assets/coffeemusictech.jpg';
// import AboutUs from "../components/AboutUs";
// import Footer from "../components/Footer";

// const About = () => {
//   return (
//     <div>
//     <Navbar />
//     <div className="about-image-container">
//     <img className="about-image" src={AboutImg} alt="About Image" />
//    </div>
//     <Hero 
//     cName=".hero-mid"
//     title="You can find my work, thoughts, and ideas here."
//     btnClass="hide"
//     />
//     <AboutUs />
//     <Footer />
//    </div>
//   )
// }

// export default About

import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import '../css/Hero.css';
import AboutImg from '../assets/coffeemusictech.jpg';
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      
      {/* Video Background */}
      <div className="video-background">
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/690645920?h=48cf612baf&autoplay=1&loop=1&background=1&mute=1"
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      {/* Content over the video */}
      <div className="about-content">
        <Hero 
          cName=".hero-mid"
          title="You can find my work, thoughts, and ideas here."
          btnClass="hide"
        />
        <AboutUs />
      </div>

      <Footer />
    </div>
  )
}

export default About;
