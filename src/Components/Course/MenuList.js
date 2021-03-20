import React from "react";
import CourseData from "../../course.json";
import MenuCard from "./MenuCard";
import "../../pages/CSS/MenuList.css";

function MenuList(props) {
  return (
    <div className="course-container">
      <div className="course-title">{CourseData[0].title} </div>
      <div className="course-desc">
        늘 먹는 집밥, 든든한 한 끼를 직접 만들어보세요!
      </div>
      <div className="menuList">
        <MenuCard />
      </div>
    </div>
  );
}

export default MenuList;
