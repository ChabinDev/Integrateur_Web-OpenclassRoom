import React, { useEffect, useState } from "react";
import { useTextLimiter } from "./useTextLimiter";
import { useDebounce } from "./useDebounce";

const Text = () => {
  const [isValid, onTextChange] = useTextLimiter();
  const [userName, setUserName] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [repos, setRepos] = useState([]);
  const debouncedUserName = useDebounce(userName, 1500);

  useEffect(() => {
    if (debouncedUserName && isValid) {
      setIsSearching(true);
      searchReposByUsername().then((res) => {
        setIsSearching(false);
        setRepos(res);
      });
    } else {
      setRepos([]);
    }
  }, [debouncedUserName, isValid]);

  const handleChange = (e) => {
    setUserName(e.target.value);
    onTextChange(e);
  };

  const searchReposByUsername = () => {
    return fetch(`https://api.github.com/users/${userName}/repos`).then((res) =>
      res.json()
    );
  };

  return (
    <>
      <input type="text" placeholder="Enter uou Name" onChange={handleChange} />
      {!isValid && (
        <div className="input-size-error">
          Please enter a text 3 and 20 caracters
        </div>
      )}
      {debouncedUserName && <div>{debouncedUserName}</div>}
      {isSearching && <div>searching ....</div>}
      {!isSearching && (
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Text;
