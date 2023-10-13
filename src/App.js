import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Sidebar from "./pages/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex gap-5">
        <Sidebar />
        <div className="max-w-5xl flex-1 mx-auto py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
