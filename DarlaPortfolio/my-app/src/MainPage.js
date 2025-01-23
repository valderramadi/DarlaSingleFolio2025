// MainPage.js ---> main container that holds all the sections of my single-page application.

import Navbar from "./components/Navbar";
import './css/mainpage.css';
import Home from './pages/Home'; // Import your About section component
import Experience from './pages/Experience'; // Import your Experience section component
import Resume from './pages/Resume'; // Import your Resume section component
import Projects from './pages/Projects'
import Contact from './pages/Contact'; // Import your Contact section component
// import Footer from './components/Footer';

const MainPage = () => {
  return (
    <>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="experience"><Experience /></section>
      <section id="resume"><Resume /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </>
  );
};

export default MainPage;