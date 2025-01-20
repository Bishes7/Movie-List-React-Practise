import React, { useEffect, useRef, useState } from "react";
import Moviecard from "./Moviecard";
import { fetchedData } from "../axios";
import { randomChar } from "../randomchar";

const Hero = () => {
  const [moviesObj, setmoviesObj] = useState({});
  const shouldFetchRef = useRef(true);

  const searchRef = useRef("");
  const [bgImg, setBgImg] = useState("");
  useEffect(() => {
    if (shouldFetchRef.current) {
      fetchedMovie(randomChar());
      shouldFetchRef.current = false;
    }
  }, []);

  const fetchedMovie = async (str) => {
    const movies = await fetchedData(str);
    setmoviesObj(movies);
    setBgImg(movies.Poster);
  };
  console.log(moviesObj);

  const movieImg = {
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const handleOnsearch = () => {
    const str = searchRef.current.value;

    fetchedMovie(str);
    searchRef.current.value = "";
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
              ref={searchRef}
              type="text"
              className="form-control"
              placeholder="Search for Movies"
              aria-label="Search for Movies"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-danger"
              type="button"
              id="button-addon2"
              onClick={handleOnsearch}
            >
              Search
            </button>
          </div>

          <div className="moviecard-display">
            <Moviecard moviesObj={moviesObj} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
