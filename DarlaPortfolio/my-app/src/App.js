import './App.css';
import Home from './pages/Home';
import AutomationProcess from './pages/AutomationProcess';
import CreateProject from './pages/CreateProject';
import DataEvaluation from './pages/DataEvaluation';
import NoPage from './pages/NoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecommendedModels from './pages/RecommendedModels';
import DownloadModel from './pages/DownloadModel';
import LoginForm from './pages/LoginForm';
import RegistrationPage from './pages/RegistrationPage';
import Contact from './pages/Contact';
import About from './pages/About';
import ProjectSamplesDisplay from './pages/ProjectSamplesDisplay';


function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/createproject" element={<CreateProject />} />
      <Route path="/samples-display" element={<ProjectSamplesDisplay />} />
      <Route path="/dataevaluation" element={<DataEvaluation />} />
      <Route path="/automationprocess" element={<AutomationProcess />} />
      <Route path="/recommendedmodels" element={<RecommendedModels />} />
      <Route path="/downloadmodel" element={<DownloadModel />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/registrationpage" element={<RegistrationPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NoPage /> } />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
