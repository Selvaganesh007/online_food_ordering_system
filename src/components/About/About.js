import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-flex">
        <div className="image-container">
          <img
            src="https://img.freepik.com/free-vector/bakery-shop-design-concept_1284-18159.jpg?w=2000"
            className="about-image"
            alt="about.img"
          />
        </div>
        <div className="about-paragraph">
          <h2 className="about-title">About </h2>
          <p className="about-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
            fermentum justo, ac placerat nulla. Morbi in feugiat magna, at
            varius dolor. Suspendisse potenti. Nunc posuere, leo vel fringilla
            ullamcorper, justo dolor consequat urna, nec tincidunt nunc metus eu
            neque. Nullam quis dapibus enim. Mauris nec lobortis felis. Oh feel
            if up to till like. He an thing rapid these after going drawn or.
            Timed she his law the spoil round defer. In surprise concerns
            informed betrayed he learning is ye. Ignorant formerly so ye
            blessing. 
          </p>

          <p className="about-description">
            He as spoke avoid given downs money on we. Of properly carriage
            shutters ye as wandered up repeated moreover.
          </p>

          <p className="about-description phone">+91-9876543243</p>
        </div>
      </div>
    </div>
  );
};
