import React from "react";
import "./menu-item.styles.scss";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ title, size, imageUrl }) => {
  let navigate = useNavigate();

  function handleClick() {
    navigate(`/${title}`);
  }
  return (
    <div className={`${size} menu-item`} onClick={handleClick}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">{"Shop Now".toUpperCase()}</span>
      </div>
    </div>
  );
};

export default MenuItem;
