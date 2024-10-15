import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Topbar from "./Components/Topbar";
import Home from "./Components/Home";
import Error404 from "./Components/Error404"; 

function App() {
  return (
    <>
      <Navbar />
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
