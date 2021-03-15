export default function User(user) {
  const { company, logo, featured, level, novo, position, role,
    postedAt, contract, location, languages, tools } = user.user

  console.log(logo)

  return (
    <div className={featured ? "feattered" : "user"}>
      <img src={logo} alt={`${company} logo`} />
    </div>
  )
}