import { useReducer } from "react"

type AppState = {
  names: string[]
  name: string
}

type AppAction = { type: "ADD_NAME" } | { type: "SET_NAME"; payload: string }

function App() {
  const initialState = {
    names: [],
    name: "",
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  function reducer(state: AppState, action: AppAction) {
    switch (action.type) {
      case "ADD_NAME":
        return { ...state, names: [...state.names, state.name] }
      case "SET_NAME":
        return { ...state, name: action.payload }
      default:
        return state
    }
  }

  return (
    <div className="App">
      <div>
        <ul>
          {state.names.map(e => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
      <div>
        <input
          id="name"
          name="name"
          type="text"
          onChange={e =>
            dispatch({ type: "SET_NAME", payload: e.target.value })
          }
        />
      </div>
      <button onClick={() => dispatch({ type: "ADD_NAME" })}>
        Add {state.name}
      </button>
    </div>
  )
}

export default App
