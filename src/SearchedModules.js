import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SearchedModules = ({ modules }) => {

    return (
        <div className="searched-list">

            {modules.map((module) => (
                <div className="searched-module-element">

                    <Link to={`/course/day-${module.day}`}>
                        <h2>{module.title}</h2>
                    </Link>

                </div>

            ))}

        </div>
    );
}

export default SearchedModules;