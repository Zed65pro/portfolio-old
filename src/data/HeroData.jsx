import * as constants from "../constants";

export const heroOne = {
  reverse: true,
  topLine: {
    text: "Hi, I'm Zaid",
  },
  headline: "Fullstack Developer",
  description:
    "Striving to develop software that enhances quality of life and adds significance.",
  buttons: [
    { label: "My Projects", path: constants.ROUTE_PROJECTS },
    { label: "My Experience", path: constants.ROUTE_EXPERIENCE },
  ],
  imgStart: "start",
  img: "./assets/images/personal-photo.png",
  start: "true",
};
