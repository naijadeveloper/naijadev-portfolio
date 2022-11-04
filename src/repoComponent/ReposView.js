import { useState } from "react";
import RepoReusable from "./RepoReusable";

const ReposView = ({data}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const pageNumbers = [];
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
    window.location.href = `/repositories/${id}`;
  }

  function handlePreviousButton (e) {
    e.target.parentElement.querySelector(".next-section").style.backgroundColor = "#222";
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }

    if(currentPage === 2) {
      //change bg-color of buttons
      e.target.style.backgroundColor = "#555";
    }
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
  }

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