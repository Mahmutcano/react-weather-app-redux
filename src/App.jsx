import Weather from "./components/Weather";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import {Routes, Route} from 'react-router-dom'
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  



  return (
    <div className="bg-teal-300 flex items-center justify-center w-screen h-screen px-10 mb-10">
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
