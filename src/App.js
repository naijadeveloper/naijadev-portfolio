import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./navComponent/Nav.js";
import About from "./aboutComponent/About";
import Repos from "./repoComponent/Repos";
import NotFound from "./helperComponents/NotFound";
import ErrorBoundary from "./helperComponents/ErrorBoundary";

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <div className="App">
          <Nav />
          <main className="contents">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<Navigate to="/" />} />
              <Route path="/repositories/*" element={<Repos />} />
              <Route path="/repos" element={<Navigate to="/repositories" />} />
              <Route path="/NotFound" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </ErrorBoundary>
    </Router>
  )
}

export default App;