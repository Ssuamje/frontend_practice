import {useEffect, useRef, useState} from 'react'
import './App.css'
import { escapeSpecialCharacters } from "./myUtil.js";

// Component
function CommitMessage({ commits, keyword }) {
  return (
  <ul>
  {commits && 
    commits
      .filter(({commit: {message}}) => {
        const bMatch = keyword && RegExp(`${keyword}`).test(message);
        return bMatch;
      })
      .map(({commit: {message}}, idx) => {
        return <li key={idx}>{message}</li>
      })}
  </ul>
  )
}

function useDebounce() {
  const debounceRef = useRef(null);

  const debounce = (callback, delay) => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(callback, delay);
  };

  return debounce;
}

function App() {
  const [keyword, setKeyword] = useState(null);
  const [repository, setRepository] = useState(null);
  const [commitLogs, setCommitLogs] = useState(null);
  const DEFAULT_REPOSITORY= 'innovationacademy-kr/42cabi';
  const debounce = useDebounce();

  useEffect(() => {
    async function getCommitLogs(repository) {
      const response = await fetch(`https://api.github.com/repos/${repository}/commits?page=1&per_page=100`);
      const commitLogs = await response.json();
      setCommitLogs(commitLogs);
    }
    getCommitLogs(DEFAULT_REPOSITORY);
  }, [repository]) // depends on, 해당 요소가 변경됨에 따라 실행됨

  function setKeywordHandler({target: {value}}) { // destructing, 해체 할당 문법
    if (value === "" || value == null) {
      value = DEFAULT_REPOSITORY;
    }

    debounce(() => setKeyword(escapeSpecialCharacters(value)), 200);
    // setKeyword(escapeSpecialCharacters(value));
  }

  function setRepositoryHandler({target: {value}}) {
    debounce(() => setRepository(value), 700);
  }

  return (
    <>
      <h1>Commit Filter</h1>
      <h3>Commit Log를 보고자 하는 repository를 입력해주세요.</h3>
      <input type="text" name='repository' id='repository' placeholder='owner/repository'
             onChange={setRepositoryHandler}/>
      <input type="text" name='commitFilterInput' id='commitFilterInput' placeholder='검색할 keyword'
             onChange={setKeywordHandler}/>
      <h2>최근 100개의 로그에서 검색합니다.</h2>
      {/* spread operator, '...' 에 대해 알아보기 */}
      {/* <CommitMessage {... {commitLogs, keyword}} />  */}
      <CommitMessage commits={commitLogs} keyword={keyword} />
    </>
  )
}

export default App
