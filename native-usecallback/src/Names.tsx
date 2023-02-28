import { useMemo } from "react"

interface NameListProps {
  list: string[]
}

function NameList({ list }: NameListProps) {
  console.log("Name List Component Rendered")

  const sortedList = useMemo<string[]>(() => {
    console.log("rendered")
    return [...list].sort()
  }, [list])

  return (
    <div>
      <h1>Names</h1>
      <ul>
        {sortedList.map((name, i) => (
          <li key={name + i}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default NameList
