import React, { useState, useEffect } from "react";
import "./LevelList.scss";

import LevelItem from "../components/LevelItem";

import data from "../mocks/data.json";
const LevelList = () => {
  const groupToValues = data
    .sort(function (a, b) {
      return a.category < b.category ? -1 : a.category > b.category ? 1 : 0;
    })
    .reduce((element, item) => {
      element[item.category] = element[item.category] || [];
      element[item.category].push(item);
      return Object(element);
    }, {});
  console.log(groupToValues);
  return (
    <>
      {Object.keys(groupToValues).map((key) => (
        <div key={key}>
          <h1 className="LevelList-Title">{key}</h1>
          <div className="LevelList-Body">
            {groupToValues[key].map((item, index) => {
              return <LevelItem key={index} {...item}/>;
            })}
          </div>
        </div>
      ))}
    </>
  );
};

export default LevelList;
