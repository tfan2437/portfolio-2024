import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import GalleryPage from "./components/GalleryPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/project/orbit"
          element={<GalleryPage projectIndex={0} scrollScale={0.93} />}
        />
        <Route
          path="/project/tovier"
          element={<GalleryPage projectIndex={1} scrollScale={1.5} />}
        />
        <Route
          path="/project/sonicfi"
          element={<GalleryPage projectIndex={2} scrollScale={0.93} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
