import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Topbar from "./Components/Topbar";
import Home from "./Components/Home";
import Features from "./Components/Features";

function App() {
  return (
    <>
      <Navbar />
      <Topbar />
      <Home />
      <Features />
    </>
  );
}
export default App;