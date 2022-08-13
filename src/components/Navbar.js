import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBars } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { homeRef, skillRef, projectRef, contactRef } = useGlobalContext();
  const [string, setString] = useState("Hello There!");
  const [isOpen, setIsopen] = useState(false);

  const mobNav = () => {
    setIsopen(!isOpen);
    if (isOpen) {
      const nav = document.querySelector(".nav");
      nav.classList.add("show");
    } else {
      const nav = document.querySelector(".nav");
      nav.classList.remove("show");
    }
  };
  document.addEventListener("scroll", () => {
    if (window.pageYOffset > 500) {
      setString("Nirant Sontakke");
    } else {
      setString("Hello There!");
    }
  });
  const click = (title) => {
    if (title === "home") {
      homeRef.current.scrollIntoView(true);
    } else if (title === "skill") {
      skillRef.current.scrollIntoView(true);
    } else if (title === "project") {
      projectRef.current.scrollIntoView(true);
    } else if (title === "contact") {
      contactRef.current.scrollIntoView(true);
    }
  };
  return (
    <div class="header">
      <div class="logo">{string}</div>
      <div class="menu-btn" onClick={mobNav}>
        <FontAwesomeIcon color="white" icon={faBars} />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <button onClick={() => click("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => click("skill")}>Skills</button>
          </li>
          <li>
            <button onClick={() => click("project")}>Projects</button>
          </li>
          <li>
            <button onClick={() => click("contact")}>Contact</button>
          </li>
          <li>
            <button onClick={() => click("resume")}>Resume</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
