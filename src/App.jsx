import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Application from "./pages/Application"; // ✅ Import Application Page
import Documentation from "./pages/Documentation"; // ✅ Import Documentation Page
const Team = () => <h1 className="text-white text-3xl">Our Team</h1>;

function App() {
  return (
    <Router>
      <div className="bg-darkPurple min-h-screen w-full">
        <Navbar />
        <div className="p-8">
          <Routes>
            <Route path="/" element={<Application />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
