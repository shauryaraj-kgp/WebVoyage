import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Progress = () => {

    const daysProgress = new Array(21)
    for (let i = 0; i < 21; i++) {
        daysProgress[i] = i + 1
    }

    const [progress, setProgress] = useState({})

    useEffect(() => {
        const savedProgress = JSON.parse(localStorage.getItem('progress')) || {}
        setProgress(savedProgress)
    }, [])

    return (
        <div className="progress-entirety">
            <div className="progress">
                <div className="navigation-bar">
                    <NavigationBar />
                </div>

                <div className="progress-contents">

                    <h2>Course Progress Record</h2>
                    {daysProgress.map((day) => (
                        <Link to={`/course/day-${day}`}>
                            Day {day} : {progress[day] ? "Completed" : "Not Completed"}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="footer">
                <Footer />
            </div>

        </div>
    );
}

export default Progress;