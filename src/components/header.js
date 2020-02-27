import React from "react";

function Header() {
  return (
    <nav className="nav-bar">
      <div className="nav-top">
        <div className="nav-bar-title">Facebook.</div>
        <div className="nav-bar-perfil">
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </div>
    </nav>
  );
}
export default Header;
