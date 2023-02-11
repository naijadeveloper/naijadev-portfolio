import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import GithubInfoContext from "../context/GithubInfoContext";
import RepoReusable from "./RepoReusable";

const ReposView = ({data}) => {
  const {repoPage, handlePageChange, scrollPos, handleSetPos} = useContext(GithubInfoContext);
 
  const [currentPos, setCurrentPos] = useState(scrollPos || 0);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(repoPage);
  const [postsPerPage] = useState(4);
  const pageNumbers = [];

  ////////scroll down to previous position if any
  window.scrollTo({top:currentPos,behavior:'smooth'});

  let pos = 0;
  window.addEventListener('scroll', function() {
    pos = this.scrollY;
  });
  //////

  for(let i = 1; i <= Math.ceil(data.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const [totalNumberOfPages] = useState(pageNumbers.length);
  //
  //
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentRepos = data.slice(indexOfFirstPost, indexOfLastPost);

  function openPageForOneRepo (id) {
    navigate(`/repositories/${id}`);
  }

  function handlePreviousButton (e) {
    e.target.parentElement.querySelector(".next-section").style.backgroundColor = "#222";
    if (currentPage > 1) {
      handlePageChange(repoPage - 1);
      setCurrentPage(prev => prev - 1);
    }

    if(currentPage === 2) {
      //change bg-color of buttons
      e.target.style.backgroundColor = "#555";
    }

    setCurrentPos(0);
  }

  function handleNextButton (e) {
    e.target.parentElement.querySelector(".previous-section").style.backgroundColor = "#222";
    if (currentPage < totalNumberOfPages) {
      setCurrentPage(prev => prev + 1);
    }

    if(currentPage === totalNumberOfPages-1) {
      //change bg-color of buttons
      e.target.style.backgroundColor = "#555";
    }

    setCurrentPos(0);
  }

  useEffect(() => {
    if(currentPage == 1) {
      //
      document.querySelector(".previous-section").style.backgroundColor = "#555"; 
      document.querySelector(".next-section").style.backgroundColor = "#222"; 
      //
    }else if(currentPage == totalNumberOfPages) {
      //
      document.querySelector(".next-section").style.backgroundColor = "#555"; 
      document.querySelector(".previous-section").style.backgroundColor = "#222"; 
      //
    }else {
      document.querySelector(".previous-section").style.backgroundColor = "#222"; 
      document.querySelector(".next-section").style.backgroundColor = "#222"; 
    }
    return () => {
      handlePageChange(currentPage);
      handleSetPos(pos);
    }
  });



  return (
    <section className="repos">
      <RepoReusable currentRepos={currentRepos} openPageForOneRepo={openPageForOneRepo} />
      {/* Pagination */}
      <div className="repo-pagination">
        <div onClick={handlePreviousButton} className="previous-section">👈🏾</div>
        <div onClick={handleNextButton} className="next-section">👉🏾</div>
      </div>
    </section>
  )
}

export default ReposView;