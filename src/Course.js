import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import NavigationBar from "./NavigationBar";
import CourseList from "./CourseList";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./Footer";

const CoursePage = () => {
    const { day } = useParams();
    const history = useHistory();

    if (day > 21 || day < 1) {
        history.push('*')
    }

    const { data: courses, isLoading, isError } = useFetch('/data/modules.json');

    return (
        <div className="course-entirety">
            <div className="CoursePage">
                <div className="navigation-bar">
                    <NavigationBar />
                </div>

                <div className="course-main">
                    {isLoading && <div className="loadOrData">Data is Loading</div>}
                    {isError && <div className="loadOrData">Error...</div>}

                    {courses && <CourseList module={courses["all-modules"].filter(course => course.day === day)} />}
                </div>
            </div>

            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default CoursePage;
