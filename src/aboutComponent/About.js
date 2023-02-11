import { useEffect } from "react";
import AboutView from "./AboutView";
import IsPending from "../helperComponents/IsPending"

import { useContext } from "react";
import GithubInfoContext from "../context/GithubInfoContext";

const About = () => {
  const {profileData, profileIsPending, profileError, handlePageChange, handleSetPos} = useContext(GithubInfoContext);

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
    handlePageChange(1);
    handleSetPos(0);
  }, [])

  return (
    <div>
      {profileError  && throwError()}
      {profileIsPending && <IsPending />}
      {profileData && <AboutView data={profileData}/>}
    </div>
  );
}

export default About;