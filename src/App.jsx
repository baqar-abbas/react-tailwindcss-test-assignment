import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* All other routes go to NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
