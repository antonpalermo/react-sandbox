import { useEffect, useState } from "react"
import Stopwatch from "./Stopwatch"
import { User } from "./user"
import UserDetails from "./UserDetails"

type Metadata = Pick<User, "id" | "firstname">

function App() {
  const [names, setNames] = useState<Metadata[]>([])

  useEffect(() => {
    fetch("/users.json")
      .then(data => data.json())
      .then(data => setNames(data))
  }, [])

  const [userDetails, setUserDetails] = useState<User | null>(null)

  async function onUserSelect(id: string) {
    const request = await fetch(`/${id}.json`)
    return setUserDetails(await request.json())
  }

  return (
    <div className="App">
      <Stopwatch />
      <h1>Names</h1>
      {names.map(name => (
        <div key={name.id}>
          <button
            onClick={() => onUserSelect(name.id)}
            style={{ marginBottom: "5px" }}
          >
            {name.firstname}
          </button>
        </div>
      ))}
      {userDetails && <UserDetails user={userDetails} />}
    </div>
  )
}

export default App
