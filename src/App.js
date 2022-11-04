import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./navComponent/Nav.js";
import About from "./aboutComponent/About";

const App = () => {
  return (
    <Router>
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
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App;