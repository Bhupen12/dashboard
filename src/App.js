import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./pages/Sidebar";
import Product from "./pages/Product";
import Customer from "./pages/Customer";
import Income from "./pages/Income";
import Help from "./pages/Help";

function App() {
  return (
    <BrowserRouter>
      <div className="flex gap-5">
        <div>
          <Sidebar />
        </div>
        <div className="max-w-5xl flex-1 mx-auto py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/income" element={<Income />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
