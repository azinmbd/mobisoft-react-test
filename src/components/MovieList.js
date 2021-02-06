import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieList, fetchMovieDetail } from "../store/action";

const MovieList = () => {
  const list = useSelector((state) => state.MovieListReducer.data);
  const selectedMovieDetail = useSelector(
    (state) => state.MoviveDetailReducer.data
  );
  const dispatch = useDispatch();
  console.log(selectedMovieDetail);
  useEffect(() => {
    dispatch(fetchMovieList());
  }, [dispatch]);

  const getDetail = (id) => {
    // console.log(id);
    dispatch(fetchMovieDetail(id));
  };

  const renderList = () => {
    if (list.lenght !== 0) {
      return list.map((item) => {
        return (
          <div
            className="list-box"
            key={item.imdbID}
            onClick={() => getDetail(item.imdbID)}
          >
            <img height="100%" src={item.Poster} alt="" />
            <div className="info">
              <h3>{item.Title}</h3>
              <h4>{item.Type}</h4>
              <span>{item.Year}</span>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <React.Fragment>
      <div className="row list-title">
        <h1>This week movies</h1>
      </div>
      <div className="row">
        <div className="this-week-list">{renderList()}</div>
      </div>
      <div>{selectedMovieDetail.Title ? <div>detail</div> : ""}</div>
    </React.Fragment>
  );
};
export default MovieList;
