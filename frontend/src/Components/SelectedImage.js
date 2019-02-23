import React from "react";

const SelectedImage = ({
  index,
  onClick,
  photo,
  margin,
  direction,
  top,
  left,
  changeId
}) => {
  return (
    <div
      style={{
        margin,
        height: photo.height,
        width: photo.width,
        position: "absolute",
        left: left,
        top: top,
        backgroundColor: "#eee",
        cursor: "pointer",
        overflow: "hidden"
      }}
      className={!photo.selected ? "not-selected" : ""}
      onClick={() => changeId()}
    >
      <img {...photo} />
      <style>{`.not-selected:hover{outline:2px solid #06befa}`}</style>
    </div>
  );
};

export default SelectedImage;
