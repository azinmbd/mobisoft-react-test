import React from "react";
import CloseSvg from "./svgCode/CloseSvg";
import IMDB from "../media/imdb.svg";
import RT from "../media/tomato.svg";
const MovieDetail = (props) => {
  const { detail } = props;

  return (
    <div className="modal-bg">
      <div className="detail-box">
        <div
          className="close"
          onClick={() => {
            props.removieDeatil();
          }}
        >
          <CloseSvg />
        </div>
        <div className="row">
          <div className="col-4 col-lg-12">
            <img className="poster" width="100%" src={detail.Poster} alt="" />
          </div>
          <div className="col-8 col-lg-12">
            <div className="movie-decription">
              <h1>{detail.Title}</h1>
              <div className="d-flex">
                <div className="ratings">
                  <img width="40px" src={IMDB} alt="" />
                  <h5> {detail.Ratings[1].Value}</h5>
                </div>
                <div className="ratings">
                  <img height="30px" src={RT} alt="" />
                  <h5> {detail.Ratings[2].Value}</h5>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <h3>
                  Director: <span>{detail.Director}</span>
                </h3>
                <h3>
                  Released: <span>{detail.Released}</span>
                </h3>
                <h3>
                  Runtime: <span>{detail.Runtime}</span>
                </h3>
              </div>

              <h3>
                Actors: <span>{detail.Actors}</span>
              </h3>

              <h4>
                Plot: <span>{detail.Plot}</span>
              </h4>
              <h5>
                Awards: <span>{detail.Awards}</span>
              </h5>
              <h5>
                Writer: <span>{detail.Writer}</span>
              </h5>
              <h5>
                Production: <span>{detail.Production}</span>
              </h5>
              <h6>
                Genre: <span>{detail.Genre}</span>
              </h6>
              <a className="btn"> Watch now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
