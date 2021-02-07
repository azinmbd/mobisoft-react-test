import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieList, fetchMovieDetail } from "../store/action";
import MovieDetail from "./MovieDetail";
import ListItem from "./ListItem";
import SearchBox from "./SearchBox";

const MovieList = () => {
  const [movieDetail, setMovieDetail] = useState({ selectedItem: null });

  const list = useSelector((state) => state.MovieListReducer.data);
  const searchList = useSelector((state) => state.SearchMovieListReducer.data);
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
    if (list.length !== 0 && searchList.length === 0) {
      return list.map((item) => {
        return <ListItem item={item} getDetail={getDetail} key={item.imdbID} />;
      });
    } else if (searchList.length !== 0 && searchList.Response === "True") {
      return searchList.Search.map((item) => {
        return <ListItem item={item} getDetail={getDetail} key={item.imdbID} />;
      });
    }
  };
  const renderTitle = () => {
    if (searchList.Response === "True") {
      if (searchList.length !== 0) {
        return `${searchList.Search.length} search results`;
      }
    } else if (searchList.Response === "False") {
      return "No movie was found";
    } else {
      return "This week movies";
    }
  };

  return (
    <React.Fragment>
      <div className="list-title">
        <div className="row search-box d-flex justify-content-between">
          <h1 className="col-4">{renderTitle()}</h1>
          <SearchBox />
        </div>
      </div>
      <div className="row">
        <div className="this-week-list">
          {searchList.Response === "False" ? (
            <a href="http://localhost:3000/" className="btn">
              go back
            </a>
          ) : (
            renderList()
          )}
        </div>
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
