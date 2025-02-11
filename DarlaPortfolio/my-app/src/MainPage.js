// MainPage.js ---> main container that holds all the sections of my single-page application.

import Navbar from "./components/Navbar";
import './css/mainpage.css';
import Home from './pages/Home'; 
import Experience from './pages/Experience'; 
import Projects from './pages/Projects'
import Resume from './pages/Resume'; 
import Contact from './pages/Contact'; 


const MainPage = () => {
  return (
    <>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="resume"><Resume /></section>
      <section id="contact"><Contact /></section>
    </>
  );
};

export default MainPage;