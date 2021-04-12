import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../Context'
import '../styles/userList.css'
import BoxFilter from './BoxFilter'
import User from './User'

export default function UserList() {

  const [store] = useContext(GlobalContext)
  const { users, characteristics } = store
  const [usersSelected, setUsersSelected] = useState([])

  useEffect(() => {
    characteristics.map((item) => {
      users.filter((user) => {
        if (user.role === item) {
          console.log(user.role === item, 'los roles coinciden')
          setUsersSelected([user])
          console.log(usersSelected)
          return user.role === item
        } if (user.level === item) {
          return user.level === item
        }
        return user
      })
    })
  }, [characteristics])

  console.log('Usuarios en estado:  ', usersSelected)

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