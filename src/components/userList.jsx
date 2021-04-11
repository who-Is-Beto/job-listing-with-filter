import { useContext } from 'react'
import { GlobalContext } from '../Context'
import '../styles/userList.css'
import BoxFilter from './BoxFilter'
import User from './User'

export default function UserList() {

  const [store] = useContext(GlobalContext)
  const { users, characteristics } = store

  const usersFiltered = users.filter((user) => {
    return user.role === 'Frontend'
  })
    .map((user) => {
      return user
    })

  console.log(usersFiltered)

  return (
    <section className="user__list-wrapper">
      <div
        style={characteristics.length > 0 ? { margin: '-90px 0 0 0 ' } : {}}
        className="user__list-elemets">
        {characteristics.length > 0 && (
          <BoxFilter
            style={characteristics.length > 0 ? { background: 'red' } : {}}
          />
        )}
        {users.map((user) => (
          <User key={user.id} user={user} />
        )
        )}
      </div>
    </section >
  )
}