import React, { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    // Function to handle the navbar toggle and link clicks
    const handleNavbar = () => {
      const toggleButton = document.getElementById('toggleButton');
      const menu = document.getElementById('navbarSupportedContent');

      if (toggleButton && menu) {
        toggleButton.addEventListener('click', () => {
          menu.classList.toggle('show');
        });

        const navLinks = document.querySelectorAll('.navbar-nav a.nav-link');
        navLinks.forEach((link) => {
          link.addEventListener('click', () => {
            if (menu.classList.contains('show')) {
              menu.classList.remove('show');
            }
          });
        });
      }
    };

    // Call the functions on component mount
    handleNavbar();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid pt-2">
        <div>
          <h1 className="navbar-brand fs-2">Portfolio</h1>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          id="toggleButton"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skill">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#project">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
