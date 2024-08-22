import { Link } from "react-router-dom/cjs/react-router-dom.min";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

const NotFound = () => {
    return (
        <div className="NotFound-entirety">
            <div className="NotFound">
                <div className="navigation-bar">
                    <NavigationBar />
                </div>

                <div className="NotFound-contents">
                    <h2>Oops! Looks like the page you want to go to does not Exist.</h2>
                    <Link to='/'>
                        <button>Go to Home</button>
                    </Link>
                </div>
            </div>

            <div className="footer">
                <Footer />
            </div>

        </div>
    );
}

export default NotFound;