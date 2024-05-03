import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import CloseIcon from "@mui/icons-material/Close";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { homeRef, skillRef, projectRef, contactRef } = useGlobalContext();
  const [string, setString] = useState("Hello There!");
  const [isOpen, setIsopen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      const nav = document.querySelector(".nav");
      nav.classList.add("show");
    } else {
      const nav = document.querySelector(".nav");
      nav.classList.remove("show");
    }
  }, [isOpen]);

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
    mobNav();
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
    <div className="header">
      <div className="logo">{string}</div>
      <div className="menu-btn" onClick={() => setIsopen(!isOpen)}>
        {isOpen ? (
          <FontAwesomeIcon color="white" icon={faClose} />
        ) : (
          <FontAwesomeIcon color="white" icon={faBars} />
        )}
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
            <a
              href="https://drive.google.com/file/d/1HXDQli-_XbJGaxotdhKDS83v93JXZ2hy/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
