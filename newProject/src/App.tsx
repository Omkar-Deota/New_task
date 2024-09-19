import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Registration from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Registration/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element= {<Dashboard/>} />
      </Routes>
    </Router>
  )
}

export default App
