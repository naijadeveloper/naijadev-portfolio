import { useEffect } from "react";
import useFetch from "../customHook/useFetch";
import AboutView from "./AboutView";
import IsPending from "../helperComponents/IsPending"

const About = () => {
  const {data, isPending, error} = useFetch("https://api.github.com/users/naijadeveloper");

  function throwError () {
    throw new Error();
  }

  useEffect(() => {
    const nav_about = document.querySelector(".nav-links a:first-child");
    const nav_repo = document.querySelector(".nav-links a:last-child");
    //
    nav_about.style.backgroundColor = "#ccc";
    nav_about.style.color = "#222";
    //
    nav_repo.style.backgroundColor = "#555";
    nav_repo.style.color = "#ccc";
  }, [])

  return (
    <div>
      {error  && throwError()}
      {isPending && <IsPending />}
      {data && <AboutView data={data}/>}
    </div>
  );
}

export default About;