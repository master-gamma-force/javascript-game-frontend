import React, { useState, useEffect } from "react";
import './Selector.scss'
import LevelList from "../components/LevelList";

const Selector = () => {
  return (
    <div className="Selector">
      <h1 className="Selector-Title">Selecciona un nivel:</h1>
      <LevelList></LevelList>
    </div>
  );
};

export default Selector;
