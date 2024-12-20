import React from "react";

export default function NavigationMenu({ setActiveSection }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-blue fixed-top">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {["Home", "Details", "RSVP", "Gallery"].map((section) => (
              <li key={section} className="nav-item">
                <button
                  className="nav-item-link"
                  onClick={() => setActiveSection(section.toLowerCase())}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
