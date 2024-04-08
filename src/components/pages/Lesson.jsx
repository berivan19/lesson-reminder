import React from 'react';

const Lesson = ({lessonData}) => {
  return (
    <>
    {lessonData.map((lesson) => {
        return (
            <div key={lesson.id}>
                <div>
                    <img src={lesson.image} alt={lesson.name} />
                </div>
                <div>
                    <p>
                        {""}
                        <span>Leson Name</span> {lesson.name}
                    </p>
                    <p>
                        {""}
                        <span>Lesson Hour</span> {lesson.hour}
                    </p>
                </div>
            </div>
        );
    })}
    </>
  );
};

export default Lesson;