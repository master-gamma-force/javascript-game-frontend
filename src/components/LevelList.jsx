import React, { useState, useEffect } from "react";
import "./LevelList.scss";
import LevelItem from "../components/LevelItem";
import levelData from "../mocks/data.json";

const LevelList = () => {
  let groupToValues = [];

  const groupBy = (data) => {
    return data
      .sort(function (a, b) {
        return a.category < b.category ? -1 : a.category > b.category ? 1 : 0;
      })
      .reduce((element, item) => {
        element[item.category] = element[item.category] || [];
        element[item.category].push(item);
        return Object(element);
      }, {});
  };

  const initialData = () => {
    let data = JSON.parse(localStorage.getItem("levelData"));
    console.log(data);
    if (!data) {
      data = levelData;
      localStorage.setItem("levelData", JSON.stringify(levelData));
    }
    groupToValues = groupBy(data);
  };

  initialData();
  return (
    <>
      {Object.keys(groupToValues).map((key) => (
        <div key={key}>
          <h1 className="LevelList-Title">{key}</h1>
          <div className="LevelList-Body">
            {groupToValues[key].map((item, index) => {
              return <LevelItem key={index} {...item} />;
            })}
          </div>
        </div>
      ))}
    </>
  );
};

export default LevelList;
