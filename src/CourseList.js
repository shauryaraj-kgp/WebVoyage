import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CourseList = ({ module }) => {

    const [progress, setProgress] = useState({});
    const history = useHistory();

    useEffect(() => {
        const storedProgress = JSON.parse(localStorage.getItem("progress")) || {}
        setProgress(storedProgress)
    }, []);

    const handleCourseDone = (day) => {

        const newProgress = { ...progress, [day]: !progress[day] }
        localStorage.setItem("progress", JSON.stringify(newProgress))
        setProgress(newProgress)

        if (newProgress[day] === true)
            history.push(`/course/day-${Number(day) + 1}`)
    };

    return (
        <div className="course-entire-list">
            {module.map((course) => (
                <div key={course.day}>
                    <h2>{course.title}</h2>
                    <div className="course-structure">
                        <p dangerouslySetInnerHTML={{ __html: course.body.replace(/\n/g, '<br>') }}></p>
                        <a href={course.resource_link} target="blank">
                            <button>View Resource</button>
                        </a>
                    </div>

                    <div className="course-resources">
                        <iframe width="600" height="350" src={course.youtube_video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <div className="course-progress">
                        <input
                            type="checkbox"
                            checked={progress[course.day]}
                            onClick={() => handleCourseDone(course.day)}
                        />

                        <p>Check this if you have completed this day's Course</p>
                    </div>

                    <div className="course-links">
                        <a href={`/course/day-${Number(course.day) - 1}`}>
                            <button>Previous Day</button>
                        </a>

                        <a href={`/course/day-${Number(course.day) + 1}`}>
                            <button>Next Day</button>
                        </a>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default CourseList;
