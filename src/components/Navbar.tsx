import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Wordmark from "./Wordmark";
import Button from "./Button";

const links = [
  { to: "/#services", label: "Services" },
  { to: "/#projects", label: "Projects" },
  { to: "/#approach", label: "Approach" },
  { to: "/#team", label: "Team" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Wordmark />
        <nav aria-label="Main navigation">
          <ul className="nav-links">
            {links.map((item) => (
              <li key={item.to}>
                {item.to.startsWith("/#")
                  ? <a href={item.to}>{item.label}</a>
                  : <NavLink to={item.to} className={({ isActive }) => isActive ? "active" : ""}>{item.label}</NavLink>}
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">
         
          <button className="mobile-toggle" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-menu" id="mobile-menu">
          <a href="/#services" onClick={() => setOpen(false)}>Services</a>
          <a href="/#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="/#approach" onClick={() => setOpen(false)}>Approach</a>
          <a href="/#team" onClick={() => setOpen(false)}>Team</a>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
