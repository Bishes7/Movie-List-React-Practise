import React from "react";
import Moviecard from "./Moviecard";

const Display = () => {
  return (
    <div className="container  mt-3">
      <div className="bg-dark">
        <div className="row p-3">
          <div className="col  ">
            <button className="btn btn-primary">All</button>
            <button className="btn btn-warning">Drama</button>
            <button className="btn btn-info">Action</button>
          </div>
          <div className="text-white mt-3">2 movies listed</div>
        </div>

        <div className="row">
          <div className="col">
            <Moviecard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
