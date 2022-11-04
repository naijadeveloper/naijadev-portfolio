import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./navComponent/Nav.js";
import About from "./aboutComponent/About";
import Repos from "./repoComponent/Repos";
import SingleRepo from "./repoComponent/SingleRepo";
import NotFound from "./helperComponents/NotFound";
import ErrorBoundary from "./helperComponents/ErrorBoundary";

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <div className="App">
          <Nav />
          <main className="contents">
            <Switch>
              <Route exact path="/">
                <About />
              </Route>

              <Route path="/about">
                <About />
              </Route>

              <Route exact path="/repositories">
                <Repos />
              </Route>

              <Route path="/repositories/:repoId">
                <SingleRepo />
              </Route>

              <Route path="*">
                  <NotFound />
              </Route>
            </Switch>
          </main>
        </div>
      </ErrorBoundary>
    </Router>
  )
}

export default App;