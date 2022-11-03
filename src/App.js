import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./navComponent/Nav.js"

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>
    </Router>
  )
}

export default App;