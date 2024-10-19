import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Topbar from "./Components/Topbar";
import Home from "./Components/Home";
import Features from "./Components/Features";
import About from "./Components/About";

function App() {
  return (
    <>
      <Navbar />
      <Topbar />
      <Home />
      <Features />
      <About />
    </>
  );
}
export default App;