import React from "react"

export default function Header() {
  return (
    <header>
      <nav>
        <span className="logo">LOGO</span>
        <span className="nav--options">
          <p>Home</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </span>
        <button type="button" className="nav--button">
          Login
        </button>
      </nav>
      <h1 className="heading">
        Medicines, Cars, Dining, Electronics Your All-in-One Solution!
      </h1>
    </header>
  );
}