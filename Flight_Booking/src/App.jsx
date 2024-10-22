import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Topbar from "./Components/Topbar";
import Home from "./Components/Home";
import Features from "./Components/Features";
import About from "./Components/About";
import Plans from "./Components/Plans";
import Banner from "./Components/Banner";
import Blog from "./Components/Blog";

function App() {
  return (
    <>
      <Navbar />
      <Topbar />
      <Home />
      <Features />
      <About />
      <Plans />
      <Banner />
      <Blog />
    </>
  );
}
export default App;