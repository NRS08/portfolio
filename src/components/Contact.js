import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useGlobalContext } from "../context";

const Contact = () => {
  const { contactRef } = useGlobalContext();

  return (
    <>
      <div ref={contactRef} className="contact-container">
        <div className="contact">
          <h1>Get in Touch</h1>
          <p>
            I am actively looking for internship opportunities. Feel free to
            drop a mail in my Inbox.
          </p>
          <div className="button">
            <button className="btn">
              <a href="mailto:nirant080602@gmail.com">Get in Touch</a>
            </button>
          </div>
          <div className="links">
            <a href="https://github.com/NRS08" target="_blank">
              <GitHubIcon />
            </a>
            <a href="mailto:nirant080602@gmail.com" target="_blank">
              <EmailIcon />
            </a>
            <a
              href="https://www.instagram.com/nirant_sontakke/"
              target="_blank"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
