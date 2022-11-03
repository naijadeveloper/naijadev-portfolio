import { Link } from "react-router-dom"

const Nav = () => {
  function changeColor (e) {
    if(e.target.textContent.includes("About")) {
      e.target.style.backgroundColor = "#ccc";
      e.target.style.color = "#222";
      // 
      e.target.parentElement.querySelector("a:nth-child(2)").style.backgroundColor = "#555";
      e.target.parentElement.querySelector("a:nth-child(2)").style.color = "#ccc";
    }else {
      e.target.style.backgroundColor = "#ccc";
      e.target.style.color = "#222";
      // 
      e.target.parentElement.querySelector("a:nth-child(1)").style.backgroundColor = "#555";
      e.target.parentElement.querySelector("a:nth-child(1)").style.color = "#ccc";
    }
  }

  return (
    <nav className="nav">
      <h1><span>😎</span>THE<span>NAIJA</span>DEVELOPER</h1>
      <div className="nav-links">
        <Link to="/" onClick={changeColor} className="start-page">🤵🏾 About</Link>
        <Link to="/repositories" onClick={changeColor}>🗃️ Repositories</Link>
      </div>
    </nav>
  );
}

export default Nav;