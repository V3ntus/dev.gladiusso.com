import { createRoot } from "react-dom/client";

import Title from "./components/Title";
import NavBar from "./components/NavBar";
import "./index.css";

const root = createRoot(document.getElementById("root"));

function App() {
  return (
    <>
      <Title />
      <NavBar />
    </>
  )
}

root.render(<App />);
