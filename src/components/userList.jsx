import { useContext } from 'react'
import { GlobalContext } from '../Context'
import '../styles/userList.css'
import User from './User'

export default function UserList() {

  const [globalState,] = useContext(GlobalContext)
  const { users } = globalState

  return (
    <section className="user__list-wrapper">
      <div className="user__list-elemets">
        {users.map((user) => (
          <User key={user.id} user={user} />
        )
        )}
      </div>
    </section>
  )
}