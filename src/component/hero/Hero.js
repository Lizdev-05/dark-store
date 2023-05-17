import React from "react";
import phone from "../../assets/phone.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container --flex-between">
        <div className="hero-content">
          <h1>Visit Lizdev Landing Page</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            iusto recusandae soluta cupiditate quasi amet accusamus nemo dolor
            suscipit illo ratione in provident accusantium sit repellat
            exercitationem, obcaecati veniam corporis corrupti cum, deserunt
            dolorem excepturi praesentium architecto. Minus, quibusdam quasi
            iusto distinctio, nesciunt eius facilis soluta rerum unde totam ut.
          </p>
          <div className="btn">
            <button>Learn More</button>
            <button>Sign Up</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={phone} alt="phone image" width={200} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
