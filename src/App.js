import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Nav from "./navComponent/Nav";
import About from "./aboutComponent/About";
import Repos from "./repoComponent/Repos";
import NotFound from "./helperComponents/NotFound";
import ErrorBoundary from "./helperComponents/ErrorBoundary";
import SingleRepo from "./repoComponent/SingleRepo";
import { GithubInfoContextProvider } from "./context/GithubInfoContext";

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <GithubInfoContextProvider>
          <div className="App">
            <Nav />
            <main className="contents">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<Navigate to="/" />} />
                <Route path="/repositories" element={<Repos />} />
                <Route path="/repositories/:repoId" element={<SingleRepo />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
          </GithubInfoContextProvider>
      </ErrorBoundary>
    </Router>
  )
}

export default App;