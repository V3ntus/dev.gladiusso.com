import { createRoot } from "react-dom/client";

import Title from "./components/Title";
import NavBar from "./components/NavBar";
import Delayed from "./components/Delayed";
import Home from "./pages/Home";
import "./index.css";

const root = createRoot(document.getElementById("root"));

function App() {
  return (
    <>
      <Title />
      <Delayed waitBeforeShow={3000}>
        <NavBar />
        <Home />
      </Delayed>
    </>
  )
}

setTimeout(() => {root.render(<App />);}, 2000);
