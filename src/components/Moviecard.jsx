import React from "react";

const Moviecard = ({ moviesObj }) => {
  const { Poster, Title, imdbRating, Plot } = moviesObj;

  return (
    <div className="container ">
      <div className="row  border rounded mt-5 p-2 movie-card-item ">
        <div className="col-md">
          <img src={Poster} alt="" />
        </div>
        <div className="col-md text-dark">
          <h3>{Title}</h3>
          <p>IMDB Rating: {imdbRating}</p>
          <p>{Plot}</p>
          <div className="text-center d-flex justify-content-around">
            <button className="btn btn-warning">Drama</button>
            <button className="btn btn-info">Action</button>
          </div>
          <div className="d-grid mt-2">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moviecard;
