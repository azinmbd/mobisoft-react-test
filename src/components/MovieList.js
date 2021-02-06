import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieList, fetchMovieDetail } from "../store/action";

const MovieList = () => {
  const list = useSelector((state) => state.MovieListReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieList());
  }, [dispatch]);

  const showDetail = (id) => {
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
            onClick={() => showDetail(item.imdbID)}
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
      <div className="row this-week-list">
        <div className="col-8 col-lg-12">
          <h1>This week movies</h1>
          {renderList()}
        </div>
        <div className="col-4 col-lg-12"></div>
      </div>
    </React.Fragment>
  );
};
export default MovieList;
