import React from "react";
import "./Home.css";

const Home = () => {

  return (
    <>
      <div className="home-container">
        <div className="text-white"></div>
        <div className="text-center">
          {" "}
          <p className="text-[gold]  text-4xl mt-5">I'M ATIKUR RAHAMAN AHAD.</p>
          <br></br>
          <p className="text-white text-4xl"> WEB DEVELOPER</p>
          <p className="text-[gray]">
            I'm a Tunisian based web designer  front‑end developer focused on
            crafting clean  user‑friendly experiences, I am passionate about
            building excellent software that improves the lives of those around
            me.
          </p>
          <button className=" button text-white">More About Me</button>
        </div>
        <div className="text-white">what</div>
      </div>
    </>
  );
};

export default Home;
