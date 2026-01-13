import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import LoginPage from "@/pages/Login"
import SignupPage from "@/pages/Signup"

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="/groups" element={<div>Groups</div>} />
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </BrowserRouter>
  )
}
