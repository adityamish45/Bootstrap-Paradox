import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;