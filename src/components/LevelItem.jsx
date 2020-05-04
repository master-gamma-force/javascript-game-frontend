import React from "react";
import "./LevelItem.scss";

const LevelItem = ({ id, isActive, isWinner, category, levelNumber }) => {
  const classActive =
    "LevelItem-Button " + (isActive ? "LevelItem-Button_isActive" : "");

  const classWinner = "LevelItem-Image " + (isWinner? "LevelItem-Image_IsWinner" : !isActive ? "LevelItem-Image_IsNotWinner": "");
  return (
    <div className={classActive}>
      <span>{levelNumber}</span>
      <div className={classWinner}></div>
    </div>
  );
};

export default LevelItem;
