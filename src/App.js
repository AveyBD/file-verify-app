import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import File from "./Pages/Dashboard/File";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard/>}>
        <Route index element={<File />}></Route> 
        </Route>  
      </Routes>
    </div>
  );
}

export default App;
