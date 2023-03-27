import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { routes } from "./routes/index";
import Sidebar from "./components/Sidebar";

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
      <Switch>
        {routes.map(({ id, link, component }) => (
          <Route key={id} exact path={link}>
            {component}
          </Route>
        ))}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
