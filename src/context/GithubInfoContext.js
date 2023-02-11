import { createContext, useState } from "react";
import useFetch from "../customHook/useFetch";

const GithubInfoContext = createContext();
export default GithubInfoContext;

export function GithubInfoContextProvider({children}) {
  const {data: profileData , isPending: profileIsPending, error: profileError} = useFetch("https://api.github.com/users/naijadeveloper");

  const [repoPage, setRepoPage] = useState(1);
  const handlePageChange = (page_num) => {
    setRepoPage(page_num);
  }

  const [scrollPos, setScrollPos] = useState(0);
  const handleSetPos = (pos) => {
    setScrollPos(pos);
  }

  const {data: reposData, isPending: reposIsPending, error: reposError} = useFetch("https://api.github.com/users/naijadeveloper/repos");

  return (
    <GithubInfoContext.Provider value={{ 
      profileData,
      profileIsPending,
      profileError,

      reposData,
      reposIsPending,
      reposError,

      repoPage,
      handlePageChange,

      scrollPos,
      handleSetPos
     }}>
      {children}
    </GithubInfoContext.Provider>
  )
}