import React from "react";
import Moviecard from "./Moviecard";

const Hero = () => {
  const movieImg = {
    backgroundImage: `url("https://www.omdbapi.com/src/poster.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div>
      <nav className=" py-3 text-danger fixed-top ">
        <h2 className="container">Movie World</h2>
      </nav>

      <div
        className="hero d-flex align-items-center justify-content-center text-white  "
        style={movieImg}
      >
        <div className="hero-content ">
          <div className="form-center">
            <div className="text-center">
              <h1>Search Movies</h1>
              <p>Find about the movies more...</p>
            </div>
          </div>
          <div className="input-group mt-5">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button className="btn btn-danger" type="button" id="button-addon2">
              Search
            </button>
          </div>
          <div className="moviecard-display">
            <Moviecard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
