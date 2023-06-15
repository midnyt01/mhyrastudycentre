import logo from './logo.svg';
import {Routes, Route} from "react-router-dom"
import "./styles/Home.module.css"
import "./styles/sidebar.styles.css"
import Home from './pages/home';
import Navbar from './components/navbar';
import SamplePapers from './pages/samplepapers';
import AboutUs from './pages/aboutus';
import VisionAndMission from './pages/visionandmission';
import Courses from './pages/courses';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='samplepapers' element={<SamplePapers />} />
        <Route path='courses/*' element={<Courses />} />
        <Route path='about/aboutus' element={<AboutUs />} />
        <Route path='about/visionandmission' element={<VisionAndMission />} />
      </Routes>
      </>
  );
}

export default App;
