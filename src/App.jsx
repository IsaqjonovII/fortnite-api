import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import VBucks from "./pages/Vbucks";
import BattlePass from "./pages/BattlePass";
import Crew from "./pages/Crew";

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
        <Route path="/crew" element={<VBucks />} />
        <Route path="/battle-pass" element={<BattlePass />} />
        <Route path="/vbucks" element={<Crew />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
