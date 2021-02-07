import React from "react";

const ListItem = (props) => {
  const { item } = props;
  return (
    <div
      className="list-box"
      onClick={() => props.getDetail(item.imdbID)}
    >
      <img height="100%" src={item.Poster} alt="" />
      <div className="info">
        <h3>{item.Title}</h3>
        <h4>{item.Type}</h4>
        <span>{item.Year}</span>
      </div>
    </div>
  );
};
export default ListItem;
