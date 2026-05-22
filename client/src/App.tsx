import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Interests from "./pages/Interests";

export default function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Sidebar />
      <div className="layout">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/interests" element={<Interests />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
