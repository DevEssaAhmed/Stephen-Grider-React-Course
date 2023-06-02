import { useState } from "react";
import React from "react";
import bird from "./assets/bird.svg";
import cow from "./assets/cow.svg";
import cat from "./assets/cat.svg";
import dog from "./assets/dog.svg";
import gator from "./assets/gator.svg";
import heart from "./assets/heart.svg";
import horse from "./assets/horse.svg";

const svgMap = {
  bird,
  cow,
  cat,
  dog,
  gator,
  horse,
};

const AnimalShow = ({ type }) => {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" src={svgMap[type]} alt="" />
      <img 
      className="heart"
      src={heart} 
      alt="" 
      style={{ width: 10 + 10 * clicks + 'px' }} />
    </div>
  );
};

export default AnimalShow;
