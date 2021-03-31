import { useContext } from 'react'
import { GlobalContext } from '../Context'
import { types } from '../reducers/reducer'
import '../styles/userList.css'
import User from './User'

export default function UserList() {

  const [store, dispatch] = useContext(GlobalContext)
  const { users, characteristics, filteredUsers } = store
  console.log(characteristics)

  return (
    <section className="user__list-wrapper">
      <div className="user__list-elemets">

        {/* characteristics <= 0 &&  */users.map((user) => (
          <User key={user.id} user={user} />
        )
        )}
      </div>
    </section>
  )
}