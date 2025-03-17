import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navigation.css";

export default function NavigationMenu({ setActiveSection, activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="d-flex justify-content-center">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-transparent"
        style={{
          position: "fixed",
          top: 0,
          zIndex: 1000,
          marginTop: "0.70rem",
        }}
      >
        <button
          className="navbar-toggler w-100 d-flex justify-content-center"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <div className="navbar-toggler">
            <i class="fa-solid fa-bars" style={{ color: "#25287d" }}></i>
            <span className="px-2">Menu</span>
          </div>
        </button>
        <div
          className={`collapse navbar-collapse ${
            isOpen
              ? "show d-flex align-items-center justify-content-center mt-3"
              : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {[
              "Home",
              "Details",
              "Things To Do",
              "Where To Stay",
              "Gallery",
            ].map((section) => (
              <li
                key={section}
                className={`nav-item ${
                  section.toLowerCase() === activeSection
                    ? "nav-item-active"
                    : ""
                }`}
              >
                <button
                  className="nav-item-link w-100"
                  onClick={() => {
                    setActiveSection(section.toLowerCase());
                    setIsOpen(false);
                  }}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
