import React from "react";
import { useHistory } from "react-router-dom";
import "./LevelItem.scss";

const LevelItem = ({
  id,
  isActive,
  isWinner,
  category,
  levelNumber,
  md_id,
}) => {
  const history = useHistory();
  const classActive =
    "LevelItem-Button " + (isActive ? "LevelItem-Button_isActive" : "");
  const classWinner =
    "LevelItem-Image " +
    (isWinner
      ? "LevelItem-Image_IsWinner"
      : !isActive
      ? "LevelItem-Image_IsNotWinner"
      : "");

  const handleClick = () => {
    if (isActive) {
      activeteWinner();
      activeNextLevel();
      history.push({
        pathname: "/filter",
        state: { md_id: md_id },
      });
    }
  };
  const activeteWinner = () => {
    let data = JSON.parse(localStorage.getItem("levelData"));
    for (var i = data.length - 1; i >= 0; i--) {
      if (data[i].id === id) {
        data[i].isWinner = true;
      }
    }
    localStorage.setItem("levelData", JSON.stringify(data));
  };

  const activeNextLevel = () => {
    let data = JSON.parse(localStorage.getItem("levelData"));
    for (var i = data.length - 1; i >= 0; i--) {
      const level = levelNumber + 1;
      if (level === data[i].levelNumber) {
        data[i].isActive = true;
      }
    }
    localStorage.setItem("levelData", JSON.stringify(data));
  };

  return (
    <div className={classActive} onClick={handleClick}>
      <span>{levelNumber}</span>
      <div className={classWinner}></div>
    </div>
  );
};

export default LevelItem;
