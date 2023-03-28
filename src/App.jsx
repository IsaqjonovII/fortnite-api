import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import VBucks from "./pages/Vbucks";
import BattlePass from "./pages/BattlePass";

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
        <Route path="/battle-pass" element={<BattlePass />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
