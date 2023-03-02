import { useEffect, useState } from "react"

function Stopwatch() {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => setCount(c => c + 1), 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <h3>Count: {count}</h3>
    </div>
  )
}

export default Stopwatch
