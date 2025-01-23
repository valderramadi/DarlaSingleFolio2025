import "./App.css";
import MainPage from "./MainPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100,    // Offset from the original trigger point
      once: false,     // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;