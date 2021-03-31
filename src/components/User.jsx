import { useContext } from 'react'
import { GlobalContext } from '../Context'
import '../styles/user.css'
import { types } from '../reducers/reducer'

export default function User(user) {
  const { company, logo, featured, level, novo, position, role,
    postedAt, contract, location, languages, tools } = user.user

  const [store, dispatch] = useContext(GlobalContext)
  const { characteristics } = store

  const handleClick = (id) => {
    dispatch({ type: types.addFilter, payload: id })
  }


  return (
    <div className={featured ? "feattered" : "user"}>
      <div className="logo__container">
        <img className='user__logo' src={logo} alt={`${company} logo`} />
      </div>
      <div className="company__conatiner">
        <small>{company}</small>
        {novo && <p className='new'>NEW!</p>}
        {featured && <p className='featured'>FEATURED</p>}
      </div>
      <div className="position">
        <p>{position}</p>
      </div>
      <div className="data">
        <p className='days'>{postedAt}</p>
        <span>•</span>
        <p className='contarct'>{contract}</p>
        <span>•</span>
        <p className='location'>{location}</p>
      </div>

      <div className="skills">
        <button onClick={() => handleClick(role)} className='skill__tag'>{role}</button>
        <button onClick={() => handleClick(level)} className='skill__tag'>{level}</button>
        {languages.map((lenguage) => (
          <button onClick={() => handleClick(lenguage)} key={lenguage} className='skill__tag'>{lenguage}</button>
        ))}
        {tools.map((tool) => (
          <button onClick={() => handleClick(tool)} key={tool} className='skill__tag'>{tool}</button>
        ))}
      </div>
    </div>
  )
}