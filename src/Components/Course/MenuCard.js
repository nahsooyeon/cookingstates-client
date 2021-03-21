import React from "react";

import recipe from "../../recipe.json";
import "../../pages/CSS/MenuCard.css";

function MenuCard(props) {
  return (
    <>
      <div className="menu-card">
        <img
          src={recipe[1].image.small}
          className="menuImg"
          alt="course1"
        ></img>
        <div className="menu-name">{recipe[1].title}</div>
        <div className="difficulty-1">{"⭑".repeat(recipe[1].difficulty)}</div>
      </div>
      <div className="menu-card">
        <img
          src={recipe[0].image.small}
          className="menuImg"
          alt="course1"
        ></img>
        <div className="menu-name">{recipe[0].title}</div>
        <div className="difficulty-2">{"⭑".repeat(recipe[0].difficulty)}</div>
      </div>
      <div className="menu-card">
        <img
          src={recipe[2].image.small}
          className="menuImg"
          alt="course1"
        ></img>
        <div className="menu-name">{recipe[2].title}</div>
        <div className="difficulty-3">{"⭑".repeat(recipe[2].difficulty)}</div>
      </div>
      <div className="menu-card">
        <img
          src={recipe[3].image.small}
          className="menuImg"
          alt="course1"
        ></img>
        <div className="menu-name">{recipe[3].title}</div>
        <div className="difficulty-4">{"⭑".repeat(recipe[3].difficulty)}</div>
      </div>
      <div className="menu-card">
        <img
          src={recipe[4].image.small}
          className="menuImg"
          alt="course1"
        ></img>
        <div className="menu-name">{recipe[4].title}</div>
        <div className="difficulty-5">{"⭑".repeat(recipe[4].difficulty)}</div>
      </div>
    </>
  );
}

export default MenuCard;
