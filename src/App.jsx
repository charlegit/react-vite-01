import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("charle")
  const [data, setData] = useState([])

  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then(res => res.json())
      .then(data => setData(data))
  }, [count])

  console.log(data);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello {name}</h1>
      <button type="button" onClick={()=> setName("durian")}>Update Name</button>
      <div className="card">
        <h3>{count}</h3>
        <button onClick={() => setCount((count) => count + 1)}>
          Increase
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrease
        </button>
            
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
