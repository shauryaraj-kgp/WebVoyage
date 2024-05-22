import { useState } from "react";
import NavigationBar from "./NavigationBar";
import SearchedModules from "./SearchedModules";
import useFetch from "./useFetch";
import Footer from "./Footer";

const Search = () => {

    const [searchData, setSearchData] = useState('')
    const { data: modules, isLoading, isError } = useFetch('http://localhost:8000/all-modules')

    const filteredModules =
        modules ?
            modules.filter(
                module =>
                    module.body.toLowerCase().includes(searchData.toLowerCase()) ||
                    module.title.toLowerCase().includes(searchData.toLowerCase())
            )
            : [];


    //console.log(filteredModules)

    return (
        <div className="search-entirety">
            <div className="SearchPage">
                <div className="navigation-bar">
                    <NavigationBar />
                </div>

                <div className="search-main">
                    <h2>What are you looking for?</h2>
                    <div className="search-input">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchData}
                            onChange={(e) => setSearchData(e.target.value)}
                        />
                    </div>

                    <div className="search-items">

                        {isLoading && <div className="loadOrError">Data is Loading...</div>}
                        {isError && <div className="loadOrError">Error...</div>}
                        {searchData && filteredModules && <SearchedModules modules={filteredModules} />}
                    </div>
                </div>

            </div>

            <div className="footer">
                <Footer />
            </div>

        </div>
    );
}

export default Search;