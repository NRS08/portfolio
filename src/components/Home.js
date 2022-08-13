import React from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import "./Home.css";
import { useGlobalContext } from "../context";

const Home = () => {
  const { homeRef } = useGlobalContext();

  return (
    <>
      <div ref={homeRef} className="container">
        <div className="content">
          <div className="text hi">I am,</div>
          <div className="home-name">Nirant Sontakke</div>
          <div className="text">
            a 3rd year student at{" "}
            <span className="clg">
              Indian Institute of Information Technology, Kottayam
            </span>
            , pursuing my BTech in Computer Science Engineering. I am good at
            Full-Stack web development, and I love to play around with new
            Technologies and build something new.
          </div>
          <div className="button">
            <button className="btn">Get In Touch</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
