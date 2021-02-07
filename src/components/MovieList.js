import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieList, fetchMovieDetail } from "../store/action";
import MovieDetail from "./MovieDetail";
import ListItem from "./ListItem";

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
          <ListItem
            item={item}
            getDetail={getDetail}
            key={item.imdbID}
          />
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
      {selectedMovieDetail.Title ? <MovieDetail detail={selectedMovieDetail}/> : <div></div>}
    </React.Fragment>
  );
};
export default MovieList;
