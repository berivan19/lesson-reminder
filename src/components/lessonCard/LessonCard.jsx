import React, { useState } from 'react';
import Lesson from '../pages/Lesson';
import {data} from "../../helper/data";


const LessonCard = () => {
    const [lesson, setlesson] = useState(data.lenght)
    const[lessonData, setLessonData] = useState(
        data.map((item, index) => ({...item, key: index}))
    );

    const clear = () => {
        setLessonData([])
        setlesson(0);
    };


  return (
    <div>
        <h2>{lesson} Lessons Today</h2>
        <Lesson lessonData={lessonData}/>
        <button onClick={clear}>Clear list</button>
    </div>
  )
}

export default LessonCard