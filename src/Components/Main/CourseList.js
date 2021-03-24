import React, { useState, useEffect } from "react";
import CourseListItem from "./CourseListItem";
import "../../pages/CSS/courseList.css";
import axios from "axios";
import API from "../../api";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function CourseList(props) {
  const userInfo = useSelector((state) => state.userReducer.userInfo);
  const [Courses, setCourses] = useState([]);
  const [CustomRecipes, setCustomRecipes] = useState([]);

  useEffect(() => {
    axios.get(API.COURSE_INFO).then((res) => {
      setCourses(res.data);
    });
    axios
      .get(API.CUSTOM_RECIPE_INFO)
      .then((res) => {
        setCustomRecipes(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <div className="course-list">
        {Courses.map((course) => (
          <CourseListItem course={course} key={course.id} />
        ))}
      </div>
      {userInfo && userInfo.data.isPassed && (
        <div className="custom-course-list">
          <h1>커스텀 레시피</h1>
          <Link to="/customRecipe">
            <button>레시피 등록하기</button>
          </Link>
          {CustomRecipes.map((recipe) => {
            return (
              <div>
                <div>제목 : {recipe.title}</div>
                <div>제작자 : {recipe.author}</div>
                <div>난이도 : {recipe.difficulty}</div>
                <div>타입 : {recipe.type}</div>
                <div>메뉴얼 : {recipe.manual}</div>
                <img alt="" src={recipe.image}></img>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CourseList;
