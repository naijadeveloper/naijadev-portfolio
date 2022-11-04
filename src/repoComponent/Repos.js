import { useEffect } from "react";
import useFetch from "../customHook/useFetch";
import ReposView from "./ReposView";
import IsPending from "../helperComponents/IsPending";

const Repos = () => {
  const {data, isPending, error} = useFetch("https://api.github.com/users/naijadeveloper/repos");

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
      {error  && throwError()}
      {isPending && <IsPending />}
      {data && <ReposView data={data.sort((a, b) => b.id - a.id)} />}
    </div>
  );
}

export default Repos;