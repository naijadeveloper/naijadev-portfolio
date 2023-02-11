import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../customHook/useFetch";
import RepoResuable from "./RepoReusable";
import IsPending from "../helperComponents/IsPending";
import NotFound from "../helperComponents/NotFound";
import GithubInfoContext from "../context/GithubInfoContext";

const SingleRepo = () => {
  const {reposData} = useContext(GithubInfoContext);

  const { repoId } = useParams();

  function throwError () {
    throw new Error();
  }

  const singleRepo = [];
  if(reposData) {
    reposData.map(repo => {
      if(repo.id === Number(repoId)) {
        singleRepo.push(repo);
      }
      return singleRepo;
    })
  }

  return (
    <div className="single-repo-page">
      {singleRepo.length != 0 && <div role="img" arial-label="close-button" className="close-single-repo-page">
        <Link to="/repositories">❎</Link>
      </div>}
      {reposData? 
      singleRepo.length === 0? 
      <NotFound />
      : 
      <RepoResuable currentRepos={singleRepo}/> 
      : ""
      }
    </div>
  )
}

export default SingleRepo;