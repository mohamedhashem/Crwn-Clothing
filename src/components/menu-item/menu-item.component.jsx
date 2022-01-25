import React from "react";

import "./menu-item.styles.scss";

const MenuItem = ({ title, size, imageUrl }) => (
  <div
    
    className={`${size} menu-item`}
  >
    <div className="background-image" style={{
      backgroundImage: `url(${imageUrl})`,
    }}/>
    <div className="content">
      <div className="title">{title.toUpperCase()}</div>
      <span className="subtitle">{"Shop Now".toUpperCase()}</span>
    </div>
  </div>
);

export default MenuItem;
