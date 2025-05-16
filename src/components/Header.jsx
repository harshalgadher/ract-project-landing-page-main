import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="container d-flex justify-content-between">
        <div className="logo-area">
          <img src="https://avada.com/wp-content/uploads/2021/07/avada-logo-svg.svg" alt="logo" className="img-fluid" width={200} />
        </div>

        <nav className="nav">
          <a href="#" className="nav-link">Avada ▾</a>
          <a href="#" className="nav-link">Avada For ▾</a>
          <a href="#" className="nav-link">Hosting</a>
          <a href="#" className="nav-link">Customization</a>
          <a href="#" className="nav-link">Resources ▾</a>
        </nav>

        <button className="button">✨ My Avada</button>
      </div>
    </header>
  );
}

export default Header;
