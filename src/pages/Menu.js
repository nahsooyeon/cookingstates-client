import React, { useState, useEffect } from "react";
import Nutrition from "../Components/Course/Nutrition";
import "./CSS/Menu.css";
import { withRouter } from "react-router-dom";
import RecipeComponent from "../Components/Course/Recipe";
import MenuNav from "../Components/Course/MenuNav";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo } from "../actions/user_action";
import API from "../api";
import axios from "axios";

function Menu(props) {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.userReducer.accessToken);
  const userInfo = useSelector((state) => state.userReducer.userInfo);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/user/info`, {
        withCredentials: true,
        headers: {
          authorization: "Bearer " + accessToken,
        },
      })
      .then((res) => {
        dispatch(setUserInfo(res.data));
      });
  });

  console.log(userInfo);

  const currentRecipe = useSelector(
    (state) => state.recipeReducer.currentRecipe
  );

  if (currentRecipe) {
    return (
      <>
        <div className="menu-container">
          <MenuNav />
          <div className="menu-body">
            <div className="menu-title">{currentRecipe[0].title}</div>
            <div id="menu-recipe-info">
              <Nutrition recipe={currentRecipe[0]} />
              <div id="menu-ingredient">
                <div className="menu-ingredient-title">재료</div>
                <img
                  src={currentRecipe[0].image.small}
                  className="menu-ingredient-img"
                  alt=""
                />
                <div className="menu-ingredient-desc">
                  {currentRecipe[0].ingredient}
                </div>
              </div>
            </div>
            <div id="menu-recipe-list">
              <span className="menu-recipe-list-title">요리 순서</span>
              {currentRecipe[0]["manual"].map((step, idx) => (
                <RecipeComponent key={idx} step={step} />
              ))}
              <div className="complete-chk">
                <input type="checkbox" id="complete-chk"></input>
                <label htmlFor="complete-chk">요리 완성!</label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <h1>Loading....</h1>;
  }
}

export default withRouter(Menu);
