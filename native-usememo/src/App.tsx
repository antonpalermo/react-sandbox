import { useMemo, useReducer } from "react"
import Form from "./Form"

interface AppState {
  names: string[]
  count: number
}

type AppActions =
  | { type: "ADD_NAMES"; payload: string }
  | { type: "INCREMENT_COUNT" }

function App() {
  const initialState: AppState = {
    names: ["Dave", "Mike", "Angel"],
    count: 0,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  function reducer(state: AppState, actions: AppActions) {
    switch (actions.type) {
      case "ADD_NAMES":
        return { ...state, names: [...state.names, actions.payload] }
      case "INCREMENT_COUNT":
        return { ...state, count: state.count + 1 }
      default:
        return state
    }
  }

  function handleSubmit(name: string) {
    dispatch({ type: "ADD_NAMES", payload: name })
  }

  const sortedNames = useMemo(() => {
    console.log("executed")
    return [...state.names].sort()
  }, [state.names])

  return (
    <div className="App">
      <Form onSubmit={name => handleSubmit(name)} />
      <button onClick={() => dispatch({ type: "INCREMENT_COUNT" })}>
        Count {state.count}
      </button>
      <h2>Original List</h2>
      <ul>
        {state.names.map((name, i) => (
          <li key={name + i}>{name}</li>
        ))}
      </ul>
      <h2>Sorted List</h2>
      <ul>
        {sortedNames.map((name, i) => (
          <li key={name + i}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
