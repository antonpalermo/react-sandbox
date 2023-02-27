import { useState } from "react"

interface FormProps {
  onSubmit: (name: string) => void
}

function Form({ onSubmit }: FormProps) {
  const [name, setName] = useState<string>("")

  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br />
      <button onClick={() => onSubmit(name)}>Add</button>
    </div>
  )
}

export default Form
