import React, { useState } from "react";
import { useGlobalContext } from "../context";
import "./Skills.css";

const Skills = () => {
  const { skillRef } = useGlobalContext();
  const languages = [
    {
      id: 1,
      name: "JS",
      img: "https://res.cloudinary.com/wtcey4wy/image/upload/v1639668016/Portfolio/Logos/js_twieu1.png",
    },
    {
      id: 2,
      name: "C++",
      img: "https://res.cloudinary.com/wtcey4wy/image/upload/v1639668018/Portfolio/Logos/cpp_bndne9.png",
    },
    {
      id: 3,
      name: "HTML",
      img: "https://res.cloudinary.com/wtcey4wy/image/upload/v1639668015/Portfolio/Logos/html_gmt4mk.png",
    },
    {
      id: 4,
      name: "CSS",
      img: "https://res.cloudinary.com/wtcey4wy/image/upload/v1639668018/Portfolio/Logos/css_loftaw.png",
    },
    {
      id: 5,
      name: "C",
      img: "https://res.cloudinary.com/wtcey4wy/image/upload/v1639668017/Portfolio/Logos/c_doi2x0.png",
    },
    {
      id: 6,
      name: "Python",
      img: "https://res.cloudinary.com/wtcey4wy/image/upload/v1639666638/Portfolio/Logos/python_guctcg.png",
    },
    {
      id: 7,
      name: "PHP",
      img: "https://res.cloudinary.com/wtcey4wy/image/upload/v1639668017/Portfolio/Logos/php_igdtyy.png",
    },
  ];

  const frameworks = [
    {
      id: 1,
      name: "React",
      img: "https://res.cloudinary.com/wtcey4wy/image/upload/v1639666639/Portfolio/Logos/react_egrvku.png",
    },
    {
      id: 2,
      name: "Bootstrap",
      img: "https://res.cloudinary.com/wtcey4wy/image/upload/v1639668017/Portfolio/Logos/bootstrap_mjfkju.png",
    },
  ];

  const tools = [
    {
      id: 1,
      name: "Git",
      img: "https://res.cloudinary.com/wtcey4wy/image/upload/v1639668015/Portfolio/Logos/git_tu3y7v.png",
    },
    {
      id: 2,
      name: "GitHub",
      img: "https://res.cloudinary.com/wtcey4wy/image/upload/v1639668015/Portfolio/Logos/giyhub_vtdilv.png",
    },
  ];
  const platforms = [
    {
      id: 1,
      name: "Heroku",
      img: "https://assets.stickpng.com/images/58480873cef1014c0b5e48ea.png",
    },
    {
      id: 2,
      name: "Vercel",
      img: "https://camo.githubusercontent.com/add2c9721e333f0043ac938f3dadbc26a282776e01b95b308fcaba5afaf74ae3/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313538383830353835382f7265706f7369746f726965732f76657263656c2f6c6f676f2e706e67",
    },
  ];

  const databases = [
    {
      id: 1,
      name: "MongoDB",
      img: "https://res.cloudinary.com/wtcey4wy/image/upload/v1639668016/Portfolio/Logos/mongo_hx2aft.png",
    },
    {
      id: 2,
      name: "MySQL",
      img: "https://res.cloudinary.com/wtcey4wy/image/upload/v1639668016/Portfolio/Logos/mysql_jc9cnz.png",
    },
  ];
  return (
    <div ref={skillRef} id="skills" className="skill-container">
      <div className="heading">My Skills</div>
      <div className="skill">
        <h3>Languages I know</h3>
        <div className="skillImg">
          {languages.map((lang) => {
            return (
              <div key={lang.id} className="img">
                <img src={lang.img}></img>
                <div className="name">{lang.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="combine">
        <div className="skill">
          <h3>Frameworks I'm familiar with</h3>
          <div className="skillImg">
            {frameworks.map((fram) => {
              return (
                <div key={fram.id} className="img">
                  <img src={fram.img}></img>
                  <div className="name">{fram.name}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="skill">
          <h3>Tools</h3>
          <div className="skillImg">
            {tools.map((tool) => {
              return (
                <div key={tool.id} className="img">
                  <img src={tool.img}></img>
                  <div className="name">{tool.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="combine">
        <div className="skill">
          <h3>Databases I have worked on</h3>
          <div className="skillImg">
            {databases.map((database) => {
              return (
                <div key={database.id} className="img">
                  <img src={database.img}></img>
                  <div className="name">{database.name}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="skill">
          <h3>Platforms</h3>
          <div className="skillImg">
            {platforms.map((platform) => {
              return (
                <div key={platform.id} className="img">
                  <img src={platform.img}></img>
                  <div className="name">{platform.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
