import React from "react";
import phone from "../../assets/phone.svg";
import "./Hero.css";

const Hero = ({ myTheme }) => {
  return (
    <section className="hero" data-theme={myTheme}>
      <div className="container --grid-15">
        <div className="hero-content">
          <h1>Visit Lizdev Landing Page</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi
            eveniet repellendus quidem qui enim, porro commodi fugiat odit nobis
            sit optio consectetur excepturi ad minus dignissimos alias dicta
            laboriosam expedita quam magni eligendi ut adipisci. Voluptatem
            eaque unde quisquam assumenda veniam natus dolore illo officia,
            magni quia ad. Hic.
          </p>
          <div className="--flex-start">
            <button className="--btn btn-p">Learn More</button>
            <button className="--btn --btn-danger">Sign Up</button>
          </div>
        </div>
        <div className="--text-center">
          <img src={phone} alt="phone image" width={200} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
