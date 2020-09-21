import React from "react";
import thinkingGif from "../images/thinking-face.gif";
import "./about-page.css";

function AboutPage() {
  return (
    <main>
      <h1>About Me</h1>
      <h2>Mike Hadley</h2>
      <p>
        We're learning HTML together{" "}
        <span role="img" aria-label="Thumbs up!">
          👍🏽
        </span>
        .
      </p>
      <p>Some artists that I've been listening to recently:</p>
      <ul className="emoji-list">
        <li>Elliott Smith</li>
        <li>Massive Attack</li>
        <li>Jessie Ware</li>
      </ul>
      <p>Some languages I am writing:</p>
      <ul className="emoji-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
      </ul>
      <p>
        A TV show that I've been watching is{" "}
        <a
          href="https://www.saltfatacidheat.com/"
          title="A cooking show recommendation"
          target="_blank"
          rel="noopener noreferrer"
        >
          Salt Fat Acid Heat
        </a>
        .
      </p>
      <div id="js-output"></div>
      <button id="click-button">Click Button</button>
      <button id="speak-button">Speak Button</button>
      <img src={thinkingGif} alt="Trivia Game Icon" width="300" />
    </main>
  );
}

export default AboutPage;
