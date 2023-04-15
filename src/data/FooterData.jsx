import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
  {
    name: "Twitter",
    icon: iconStyle(FaTwitter),
    link: "https://twitter.com/",
  },
  {
    name: "LinkedIn",
    icon: iconStyle(FaLinkedin),
    link: "https://www.linkedin.com",
  },
  {
    name: "Github",
    icon: iconStyle(FaGithub),
    link: "https://github.com/Zed65pro",
  },
];
