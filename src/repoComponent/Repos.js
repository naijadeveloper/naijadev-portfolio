import { useEffect, useContext } from "react";
import ReposView from "./ReposView";
import IsPending from "../helperComponents/IsPending";
import GithubInfoContext from "../context/GithubInfoContext";

const Repos = () => {
  const {reposData, reposIsPending, reposError} = useContext(GithubInfoContext);

  useEffect(() => {
    const nav_about = document.querySelector(".nav-links a:first-child");
    const nav_repo = document.querySelector(".nav-links a:last-child");
    //
    nav_repo.style.backgroundColor = "#ccc";
    nav_repo.style.color = "#222";
    //
    nav_about.style.backgroundColor = "#555";
    nav_about.style.color = "#ccc";
  }, [])

  function throwError () {
    throw new Error();
  }

  return (
    <div>
      {reposError  && throwError()}
      {reposIsPending && <IsPending />}
      {reposData && <ReposView data={reposData.sort((a, b) => b.id - a.id)} />}
    </div>
  );
}

export default Repos;