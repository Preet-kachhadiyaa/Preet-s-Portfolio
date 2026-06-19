import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import ProjectDetail from "./Pages/ProjectDetail";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experiance";
import Contact from "./Pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import QuickLinks from "./Pages/QuickLinks";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <QuickLinks />
    </Router>
  );
}

export default App;
