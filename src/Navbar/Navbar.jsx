import { NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <NavLink className="navbar-brand fw-bold" to="/">
        Portfolio
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/resume">Resume</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/projects">Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/skills">Skills</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
