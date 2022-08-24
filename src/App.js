import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Equipment from "./components/Equipment";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
        <Route path="equipment" element={<Equipment />} />
      </Routes>
    </div>
  );
}

export default App;
