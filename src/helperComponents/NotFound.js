import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found-page">
      <span>🤔Hmmm...</span>
      <span>I hate to burst your bubble friend, but</span>
      <span>that page does not exist here.</span>
      <Link to="/">About Page</Link>
      <Link to="/repositories">Repositories Page</Link>
    </div>
  );
}

export default NotFound;