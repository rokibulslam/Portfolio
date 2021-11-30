import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Pages/Home/Navigation/Navigation';
import Home from './Components/Pages/Home/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './Components/Pages/AboutMe/AboutMe';
import Footer from './Components/Pages/Home/Footer/Footer';
import ProjectDetails from './Components/Pages/Home/ProjectDetails/ProjectDetails';


function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="home/projectDetails/:useId" element={<ProjectDetails></ProjectDetails>}></Route>
        <Route path="/aboutMe" element={<AboutMe></AboutMe>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
