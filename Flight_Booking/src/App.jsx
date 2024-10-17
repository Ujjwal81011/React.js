import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Topbar from "./Components/Topbar";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Navbar />
      <Topbar />
      <Home />
    </>
  );
}

export default App;
