import { useMemo, useState } from "react"

function App() {
  const [numbers, setNumbers] = useState([10, 20, 30, 40])
  const [names] = useState<string[]>(() => [
    "Anton",
    "Angel",
    "Jane",
    "Camille",
    "Dave",
    "Emily",
  ])

  const total = useMemo<number>(
    () => numbers.reduce((acc, num) => acc + num, 0),
    [numbers]
  )

  const sortedNamesMemo = useMemo<string[]>(() => {
    console.log("rendered")
    return [...names].sort()
  }, [names])

  return (
    <div className="App">
      <h2>Total: {total}</h2>
      <h2>Names: {names.join(", ")}</h2>
      <h2>Sorted Names: {sortedNamesMemo.join(", ")}</h2>
    </div>
  )
}

export default App
