import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {

    const history = useHistory();
    const handleClick = () => {
        history.push('/course/day-1')
    }

    return (
        <div className="home">
            <div className="home-wrapper">
                <h1>Welcome to WebVoyage!</h1>
                <h2>Set Sail on Your Journey to Web Development Mastery!</h2>
                <p>Embark on an exciting adventure with WebVoyage, the ultimate roadmap for aspiring web developers. Whether you're a complete beginner or looking to enhance your skills, our structured and comprehensive course is designed to guide you every step of the way. With a blend of day-by-day lessons, practical projects, and curated resources, WebVoyage will equip you with the knowledge and tools needed to create stunning websites and powerful web applications. Join us today and set sail on your path to becoming a web development expert!</p>

                <div className="home-button">
                    <button onClick={handleClick}>START NOW</button>
                </div>
            </div>
        </div>
    );
}

export default Home;