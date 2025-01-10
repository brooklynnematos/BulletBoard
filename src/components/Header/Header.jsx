import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logOut } from "../../utils/auth"; // Keep your existing logout utility
import AuthModal from "./Auth/AuthModal";
import "./Header.css";
import Logo from "./images/Logo.png";

const Header = () => {
  const [user, setUser] = useState(null); // Keep track of the authenticated user
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  const handleLogout = async () => {
    try {
      await logOut();
      setUser(null);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/year">Year</Link>
          </li>
          <li>
            <Link to="/month">Month</Link>
          </li>
          <li>
            <Link to="/journal">Journal</Link>
          </li>
        </ul>
      </nav>
      <div className="auth">
        {user ? (
          <div>
            <p>Welcome, {user.displayName || "User"}</p>
            <button onClick={handleLogout}>Log Out</button>
          </div>
        ) : (
          <button onClick={() => setIsModalOpen(true)}>Sign In</button>
        )}
      </div>
      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setUser={setUser} // Pass setUser to handle successful sign-ins
      />
    </header>
  );
};

export default Header;
