import { useEffect, useState } from 'react'
import './App.css'

// Component
function CommitMessage({commits, commitPrefix}) {
  return (
  <ul>
  {commits && 
    commits
      .filter(({commit: {message}}) => {
        const bMatch = commitPrefix && RegExp(`^${commitPrefix}.+`).test(message);
        return bMatch;
      })
      .map(({commit: {message}}, idx) => {
        return <li key={idx}>{message}</li>
      })}
  </ul>
  )
}

function App() {
  const [commitPrefix, setCommitPrefix] = useState(null);
  const [commitLogs, setCommitLogs] = useState([]);

  useEffect(() => {
    async function getCommitLogs() {
      const response = await fetch('https://api.github.com/repos/sveltejs/svelte/commits');
      const commitLogs = await response.json();
      setCommitLogs(commitLogs);
    }
    getCommitLogs();
    console.log(commitLogs);
  }, []) // depends on, 해당 요소가 변경됨에 따라 실행됨

  function setCommitPrefixHandler({target: {value}}) { // destructing, 해체 할당 문법
    setCommitPrefix(value);
  }

  return (
    <>
      <h1>Commit Filter</h1>
      <input type="text" name='commitFilterInput' id='commitFilterInput'  onChange={setCommitPrefixHandler}/>
      <h2>{commitPrefix}</h2>
      {/* ... 에 대해 알아보기 */}
      <CommitMessage {...{commitLogs, commitPrefix}} /> 
      {/* <CommitMessage commits={commitLogs} commitPrefix={commit} />  */}
    </>
  )
}

export default App
