// main application component - styles app, renders folio main structure & holds some global animations
import "./App.css";
import MainPage from "./MainPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 100,   
      once: false,     
    });
  }, []);

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;