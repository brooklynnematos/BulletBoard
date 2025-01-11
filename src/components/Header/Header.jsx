import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logOut } from "../../utils/auth";
import AuthModal from "./Auth/AuthModal";
import "./Header.css";
import Logo from "./images/Logo.png";

const Header = () => {
  const [user, setUser] = useState(null); // Keep track of the authenticated user
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [isNavVisible, setIsNavVisible] = useState(false); // Navigation visibility state

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

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
      {/* Logo Section */}
      <div className="header-left">
        <img src={Logo} alt="Logo" className="logo" />
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Title Section */}
      <div className="header-center">
        <h1>BulletBoard</h1>
        <h2>Visualize Your Year One Pixel At A Time</h2>
      </div>

      {/* Navigation Bar */}
      <nav className={`navbar ${isNavVisible ? "visible" : ""}`}>
        <ul>
          <li>
            <Link className="homebutton" to="/">Home</Link>
          </li>
          <li>
            <Link className="yearbutton" to="/year">Year</Link>
          </li>
          <li>
            <Link className="monthbutton" to="/month">Month</Link>
          </li>
          <li>
            <Link className="journalbutton" to="/journal">Journal</Link>
          </li>
        </ul>
      </nav>

      {/* Authentication Section */}
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

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setUser={setUser}
      />
    </header>
  );
};

export default Header;
