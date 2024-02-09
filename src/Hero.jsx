import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            laboriosam excepturi aperiam! Possimus, impedit dignissimos at
            soluta repellat harum rerum.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman with browser" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
