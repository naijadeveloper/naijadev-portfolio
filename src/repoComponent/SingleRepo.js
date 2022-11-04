import { useParams, Link } from "react-router-dom";
import useFetch from "../customHook/useFetch";
import RepoResuable from "./RepoReusable";
import IsPending from "../helperComponents/IsPending";
import NotFound from "../helperComponents/NotFound";

const SingleRepo = () => {
  const {data, isPending, error} = useFetch("https://api.github.com/users/naijadeveloper/repos");
  const { repoId } = useParams();

  function throwError () {
    throw new Error();
  }

  const singleRepo = [];
  if(data) {
    data.map(repo => {
      if(repo.id === Number(repoId)) {
        singleRepo.push(repo);
      }
      return singleRepo;
    })
  }

  return (
    <div className="single-repo-page">
      <div role="img" arial-label="close-button" className="close-single-repo-page">
        <Link to="/repositories">❎</Link>
      </div>
      {error  && throwError()}
      {isPending && <IsPending />}
      {data? 
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