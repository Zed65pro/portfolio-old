import React from "react";
import {
  SiPython,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiGit,
  SiCplusplus,
  SiLinux,
  SiMongodb,
} from "react-icons/si";
import { SiMui } from "react-icons/si";
import { DiJava } from "react-icons/di";

import { FaNode } from "react-icons/fa";

const iconStyle = (Icon) => <Icon size={50} />;

export const experienceData = [
  {
    role: "Software Engineer Intern",
    organization: "Secure Computing",
    location: "Ankara, Turkiye",
    period: "Jun 2022 - Feb 2023",
    description: [],
    image: `${process.env.PUBLIC_URL}/assets/images/experience-images/sec.jpeg`,
  },
];

export const educationData = [
  {
    school: "Ankara University",
    period: "Jul 2019 - Jul 2023",
    received: "B.S. in Computer Engineering",
    image: `${process.env.PUBLIC_URL}/assets/images/experience-images/AnkaraUniv.png`,
  },
];

export const skillsData = [
  {
    skill: "Python",
    level: "Intermediate",
    image: iconStyle(SiPython),
    section: "Programming Languages",
  },
  {
    skill: "C++",
    level: "Intermediate",
    image: iconStyle(SiCplusplus),
    section: "Programming Languages",
  },
  {
    skill: "Linux",
    level: "Intermediate",
    image: iconStyle(SiLinux),
    section: "Tools & Platforms",
  },
  {
    skill: "Material UI",
    level: "Intermediate",
    image: iconStyle(SiMui),
    section: "Libraries & Frameworks",
  },
  {
    skill: "React",
    level: "Intermediate",
    image: iconStyle(SiReact),
    section: "Libraries & Frameworks",
  },
  {
    skill: "React native",
    level: "Intermediate",
    image: iconStyle(SiReact),
    section: "Libraries & Frameworks",
  },
  {
    skill: "JavaScript",
    level: "Intermediate",
    image: iconStyle(SiJavascript),
    section: "Programming Languages",
  },
  {
    skill: "Java",
    level: "Beginner/Intermediate",
    image: iconStyle(DiJava),
    section: "Programming Languages",
  },
  {
    skill: "HTML",
    level: "Intermediate",
    image: iconStyle(SiHtml5),
    section: "Programming Languages",
  },
  {
    skill: "CSS",
    level: "Intermediate",
    image: iconStyle(SiCss3),
    section: "Programming Languages",
  },
  {
    skill: "Express",
    level: "Intermediate",
    image: iconStyle(SiExpress),
    section: "Tools & Platforms",
  },
  {
    skill: "Mongodb",
    level: "Intermediate",
    image: iconStyle(SiMongodb),
    section: "Tools & Platforms",
  },
  {
    skill: "Node.js",
    level: "Intermediate",
    image: iconStyle(FaNode),
    section: "Tools & Platforms",
  },
  {
    skill: "Git",
    level: "Intermediate",
    image: iconStyle(SiGit),
    section: "Tools & Platforms",
  },
];

export const volunteeringData = [];
