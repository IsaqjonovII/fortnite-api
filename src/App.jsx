import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import VBucks from "./pages/Vbucks";
import BattlePass from "./pages/BattlePass";
import Crew from "./pages/Crew";
import MyLibrary from "./pages/Library";

function App() {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsSidebarOpened(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  isSidebarOpened
    ? (document.body.style = "overflow: hidden;")
    : (document.body.style = "overflow: auto;");

  return (
    <div className="app">
      <div className="side__nav">
        <Navbar
          isSidebarOpened={isSidebarOpened}
          setIsSidebarOpened={setIsSidebarOpened}
        />
        {isSidebarOpened && <Sidebar />}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crew" element={<VBucks />} />
        <Route path="/battle-pass" element={<BattlePass />} />
        <Route path="/vbucks" element={<Crew />} />
        <Route path="/my-library" element={<MyLibrary />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
