import React, { useState } from "react";
import Lesson from "../pages/Lesson";
import { data } from "../../helper/data";
import "./LessonCard.css";

const LessonCard = () => {
  const [lesson, setlesson] = useState(data.lenght);
  const [lessonData, setLessonData] = useState(
    data.map((item, index) => ({ ...item, key: index }))
  );

  const clear = () => {
    setLessonData([]);
    setlesson(0);
  };

  return (
    <div className="allCard">
       <div className="cardLesson">
      <h2>{lesson} Lessons Today</h2>
      <Lesson lessonData={lessonData} />
      <button onClick={clear}>Clear list</button>
    </div>
    </div>



   
  );
};

export default LessonCard;

