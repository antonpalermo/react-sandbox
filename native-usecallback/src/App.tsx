import { useCallback, useReducer, useState } from "react"
import NameList from "./Names"

interface AppStates {
  names: string[]
  count: number
}

type AppActions = { type: "INCREMENT_COUNT" }

function App() {
  const initialStates: AppStates = {
    names: ["Jhon", "Dave", "Anton", "Mike", "Jane"],
    count: 0,
  }

  const [states, dispatch] = useReducer(reducer, initialStates)

  function reducer(states: AppStates, actions: AppActions) {
    switch (actions.type) {
      case "INCREMENT_COUNT":
        return { ...states, count: states.count + 1 }
      default:
        return states
    }
  }

  const sort = useCallback(
    (a: string, b: string) => a.localeCompare(b) * -1,
    []
  )

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "INCREMENT_COUNT" })}>
        Count {states.count}
      </button>
      <NameList list={states.names} sortFunc={sort} />
    </div>
  )
}

export default App
