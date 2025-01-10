import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Year from "./pages/Year";
import Month from "./pages/Month";
import Journal from "./pages/Journal";
import SignUp from "./components/Header/Auth/SignUp";
import SignIn from "./components/Header/Auth/SignIn";

const App = () => {
  const { user } = useAuth(); // Correctly use the user value

  return (
    <Router>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/year" element={user ? <Year /> : <SignIn />} />
        <Route path="/month" element={user ? <Month /> : <SignIn />} />
        <Route path="/journal" element={user ? <Journal /> : <SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
