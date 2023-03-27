import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import VBucks from "./routes/Vbucks";

function App() {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  isSidebarOpened
    ? (document.body.style = "overflow: hidden;")
    : (document.body.style = "overflow: auto;");

  return (
    <div className="app">
      <Navbar
        isSidebarOpened={isSidebarOpened}
        setIsSidebarOpened={setIsSidebarOpened}
      />
      {isSidebarOpened && <Sidebar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vbucks" element={<VBucks />} />

      </Routes>
      <Footer />
    </div>
  );
} 

export default App;
