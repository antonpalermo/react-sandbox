import { useEffect, useRef, useState } from "react"

function App() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [names, setNames] = useState(["Jayson"])

  useEffect(() => {
    inputRef.current?.focus()
    const storedNames = localStorage.getItem("names")
    if (storedNames) {
      setNames(JSON.parse(storedNames))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("names", JSON.stringify(names))
  }, [names])

  function handleAddNames() {
    if (inputRef.current?.value) {
      setNames(prev => [...prev, inputRef.current?.value])
    }
  }

  return (
    <div className="App">
      <ul>
        {names.map((name, i) => (
          <li key={name + i}>{name}</li>
        ))}
      </ul>
      <input type="text" ref={inputRef} />
      <button onClick={handleAddNames}>Add</button>
    </div>
  )
}

export default App
