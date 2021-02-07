import React from "react";
const MovieDetail = (props) => {
  const { detail } = props;
  return (
    <div className="modal-bg">
      <div className="detail-box">
        <div className="row">
          <div className="col-4">
            <img width="100%" src={detail.Poster} alt="" />
          </div>
          <div className="col-8">
            <div className="movie-decription">
              <h1>{detail.Title}</h1>

              <h2>
                Director: <span>{detail.Director}</span>
              </h2>
              <h3>
                Actors: <span>{detail.Actors}</span>
              </h3>
              <h3>
                Type: <span>{detail.Type}</span>
              </h3>
              <h4>
                Released: <span>{detail.Released}</span>
              </h4>
              <h5>
                Runtime: <span>{detail.Runtime}</span>
              </h5>
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
              <div className="ratings">
                <div className="d-flex">
                  <img src="" alt="" />
                  <h5>
                    {detail.Ratings[0].Source}: {detail.Ratings[0].Value}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
