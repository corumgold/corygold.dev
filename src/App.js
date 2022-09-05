import Nav from "./components/Nav";
import Home from "./components/Home/Home";
import ExperiencePage from "./components/ExperiencePage"
import EquipmentPage from "./components/EquipmentPage"
import { Routes, Route } from "react-router-dom";
import ProjectsPage from "./components/ProjectsPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="equipment" element={<EquipmentPage />} />
      </Routes>
    </div>
  );
}

export default App;
