import '../styles/user.css'

export default function User(user) {
  const { company, logo, featured, level, novo, position, role,
    postedAt, contract, location, languages, tools } = user.user

  console.log(logo)

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
      <div className="data">
        <p className='days'>{postedAt}</p>
        <p className='contarct'>{contract}</p>
        <p className='location'>{location}</p>
      </div>

      <div className="skills"></div>
    </div>
  )
}