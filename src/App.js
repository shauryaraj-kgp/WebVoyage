import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './Navbar';
import Home from './Home';
import CoursePage from './Course';
import Search from './Search';
import NotFound from './NotFound';
import Progress from './Progress';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <div className="contents">
          <Switch>

            <Route exact path='/'>
              <Home />
            </Route>

            <Route exact path='/search'>
              <Search />
            </Route>

            <Route exact path='/course/day-:day'>
              <CoursePage />
            </Route>

            <Route exact path='/progress'>
              <Progress />
            </Route>

            <Route exact path='*'>
              <NotFound />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
