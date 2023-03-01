import { useMemo } from "react"

interface NameListProps {
  list: string[]
  sortFunc: (a: string, b: string) => number
}

function NameList({ list, sortFunc }: NameListProps) {
  console.log("executed")
  const sortedList = useMemo<string[]>(() => {
    console.log("executed")
    return [...list].sort(sortFunc)
  }, [list, sortFunc])

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
