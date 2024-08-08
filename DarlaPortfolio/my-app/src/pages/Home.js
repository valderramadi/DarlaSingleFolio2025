
import Navbar from "../components/Navbar";
import "../css/Hero.css";
import Hero from "../components/Hero";
import BackgroundVideo from "../assets/techbackground.mp4";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Hero 
      cName="hero"
      heroVideo={BackgroundVideo}
      title="Welcome to my Data Science Portfolio!"
      text="The power of data starts here!"
      texttwo="Want to fine-tune a LLM?"
      buttonText="Create Project"
      url="/createproject"
      btnClass="show"
      />
    </div>
  );
}

export default Home;