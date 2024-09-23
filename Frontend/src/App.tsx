import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { HttpMethodContextProvider } from "./context/HttpMethodProvider"
import Home from "./pages/home/Home"
import Registration from "./pages/authentiction/Login"
import Register from "./pages/authentiction/Register"
import Dashboard from "./pages/user/Dashboard"
import { UserProvider } from "./context/userProvider"
function App() {
  return (
    <HttpMethodContextProvider>
      <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Registration/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element= {<Dashboard/>} />
      </Routes>
    </Router>
    </UserProvider>
    </HttpMethodContextProvider>
  )
}

export default App
