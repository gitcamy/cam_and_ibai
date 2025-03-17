import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navigation.css";

export default function NavigationMenu({
  setActiveSection,
  activeSection,
  isMobile,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isMobile ? (
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
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <div className="navbar-toggler">
              <i class="fa-solid fa-bars" style={{ color: "#25287d" }}></i>
            </div>
          </button>
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav shadow">
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
      ) : (
        <div className="d-flex justify-content-center w-100">
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
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu}
              aria-controls="navbarNav"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <div className="navbar-toggler">
                <i class="fa-solid fa-bars" style={{ color: "#25287d" }}></i>
              </div>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
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
      )}
    </>
  );
}
