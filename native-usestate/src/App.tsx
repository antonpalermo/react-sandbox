import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  function handleIncrementCount() {
    // setCount(count + 1)
    setCount(val => val + 1)
  }

  return (
    <div className="App">
      <button onClick={handleIncrementCount}>Count {count}</button>
    </div>
  )
}

export default App
