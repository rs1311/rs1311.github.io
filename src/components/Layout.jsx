import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Layout() {
  return (
    <div className="app shell">
      <header className="topbar">
        <NavLink to="/" className="brand">
          RAGHAV<span className="ember-dot">.</span>
        </NavLink>

        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/hobbies">Hobbies</NavLink>
        </nav>

        <div className="icons">
          <a href="https://github.com/rs1311" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/raghav-sriram-8a0b23288/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://youtube.com/@deranged_engineer" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <p>Contact: raghav@mensa.sg</p>
        <p>Built in Vite + React</p>
      </footer>
    </div>
  );
}
