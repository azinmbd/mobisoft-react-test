import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieList, fetchMovieDetail } from "../store/action";
import MovieDetail from "./MovieDetail";
import ListItem from "./ListItem";
import SearchBox from "./SearchBox";

const MovieList = () => {
  const [movieDetail, setMovieDetail] = useState({ selectedItem: null });

  const list = useSelector((state) => state.MovieListReducer.data);
  const selectedItem = useSelector((state) => state.MoviveDetailReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieList());
    if (selectedItem.Title) {
      setMovieDetail({ selectedItem });
    }
  }, [dispatch, selectedItem]);

  const getDetail = (id) => {
    dispatch(fetchMovieDetail(id));
  };
  const removieDeatil = () => {
    setMovieDetail({ selectedItem: null });
  };

  const renderList = () => {
    if (list.lenght !== 0) {
      return list.map((item) => {
        return <ListItem item={item} getDetail={getDetail} key={item.imdbID} />;
      });
    }
  };

  return (
    <React.Fragment>
      <div className="row list-title">
        <div className="row search-box d-flex justify-content-between">
          <h1 className="col-4">This week movies</h1>
          <SearchBox />
        </div>
      </div>
      <div className="row">
        <div className="this-week-list">{renderList()}</div>
      </div>
      {movieDetail.selectedItem ? (
        <MovieDetail
          removieDeatil={removieDeatil}
          detail={movieDetail.selectedItem}
        />
      ) : (
        <div></div>
      )}
    </React.Fragment>
  );
};
export default MovieList;
