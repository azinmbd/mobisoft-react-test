import React from "react";
import "./style/App.scss";
import MovieList from "./components/MovieList"
import Menu from "./components/Menu"

const App = () => {
  return <React.Fragment>
    <Menu/>
    <MovieList/>
    </React.Fragment>;
};

export default App;
