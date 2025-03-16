import React, { useState, useEffect } from "react";

export default function NavigationMenu({ setActiveSection, activeSection }) {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-blue fixed-top ${
        visible ? "" : "nav-hidden"
      }`}
    >
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
          className="collapse navbar-collapse mt-2 justify-content-center"
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
