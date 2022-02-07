import React from "react";

function Tile({ src, x_position, y_position, z_position }) {
  return (
    <img
      src={src}
      className="tile"
      style={{
        left: `${x_position}%`,
        top: `${y_position}%`,
        zIndex: `${z_position}%`,
      }}
      alt="tile"
    ></img>
  );
}

export default React.memo(Tile);
