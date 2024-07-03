/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Quiz App for testing your Knowledge",
    description:
      "Designed and developed Quiz Time, a dynamic quiz application , aimed at providing an interactive and engaging platform for users to test their knowledge and skills across various subjects.",
    url: "https://quiz-time-ten.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "Developed WeatherWise, a user-friendly weather application, designed to provide users with accurate and up-to-date weather information for their location and other selected locations.",
    url: "https://weather-app-flame-xi.vercel.app/",
  },
  {
    title: "TECHISPOT CHAT APPLICATION",
    description:
      "Developed the frontend interface for TechiSpot together with my classmates, a collaborative platform for engineers. This project aimed to facilitate seamless communication among engineers by implementing a real-time chat feature.",
    url: "https://techi-spott.vercel.app/",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "Developed a fully functional tic-tac-toe game that allows two players to play against each other. The game includes features like a graphical user interface (GUI), score tracking, and reset functionality.",
    url: "https://tic-tac-toe-game-wheat-two.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
