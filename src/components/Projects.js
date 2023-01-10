import React from "react";
import "./Projects.css";
import SneakPeak from "./images/sneakpeak.png";
import { useGlobalContext } from "../context";

const Projects = () => {
  const { projectRef } = useGlobalContext();

  return (
    <div ref={projectRef} className="projects-container">
      <div className="heading">My Projects</div>
      <div className="projects">
        <a href="https://sneakpeak-store.vercel.app/" target="_blank">
          <div className="project width1">
            <div className="proj-img">
              <img src={SneakPeak}></img>
            </div>
            <div className="proj-desc">
              <h2>SneakPeak Store</h2>
              <p className="head">Made using MERN Stack</p>
              <p>
                SneakPeak is an online sneaker store, which also has an admin
                page, from login to Checkout you will have seamless experience.
              </p>
            </div>
          </div>
        </a>
        <div className="sm">
          <a
            href="https://cod-pleat.cyclic.app/api-docs/"
            target="_blank"
          >
            <div className="project width2">
              <div className="proj-desc">
                <h2>Jobs-API</h2>
                <p className="head">Made using Node JS,Swagger UI</p>
                <p>
                  API for job portal made with node js and express,it has all
                  API operations like create, read, update, delete.
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://nrs08.github.io/trendles-eventspage/"
            target="_blank"
          >
            <div className="project width2">
              <div className="proj-desc">
                <h2>Trendles-Social Club</h2>
                <p className="head">Made using React</p>
                <p>
                  Website for the Social Club of IIIT Kottayam, Trendles.It
                  collectively made by the team of Web Developers at BetaLabs
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
