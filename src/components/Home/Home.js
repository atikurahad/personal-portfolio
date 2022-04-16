import React from "react";
import "./Home.css";

const Home = () => {

  return (
    <>
      <div className="home-container">
        <div className="dev-img">
          <img
            src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__480.jpg"
            alt="dev-img"
          ></img>
        </div>

        <div className="text-center dev-info">
          <p className="text-[gold]  text-4xl mt-5">I'M ATIKUR RAHAMAN AHAD.</p>
          <br></br>
          <p className="text-white text-4xl"> WEB DEVELOPER</p>
          <p className="text-[gray] text-2xl">
            I'm a Tunisian based web designer front end developer focused on
            crafting clean user friendly experiences, I am passionate about
            building excellent software that improves the lives of those around
            me.
          </p>
          <button className=" button text-white">More About Me</button>
        </div>
      </div>
    </>
  );
};

export default Home;
