import { User } from "./user"

type UserDetailsProps = {
  user: User
}

function UserDetails({ user }: UserDetailsProps) {
  return (
    <div>
      <h1 style={{ marginBottom: "1em" }}>User Details</h1>
      <div>
        <p style={{ marginBottom: "5px" }}>Id: {user.id}</p>
        <p style={{ marginBottom: "5px" }}>
          Name: {user.firstname + user.lastname}
        </p>
        <p style={{ marginBottom: "5px" }}>Gender: {user.gender}</p>
        <p style={{ marginBottom: "5px" }}>Birthdate: {user.birthdate}</p>
      </div>
    </div>
  )
}

export default UserDetails
