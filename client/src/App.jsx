
import './App.css'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login"
import Signup from './pages/auth/Signup';
function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
   <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
