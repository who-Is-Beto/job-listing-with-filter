import { useState, createContext, useReducer } from 'react'
import storeReducer from './reducers/reducer'

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {
  const [globalState, setGlobalState] = useState({
    users: [
      {
        "id": 1,
        "company": "Photosnap",
        "logo": "https://i.ibb.co/6Xz9ShC/photosnap.png",
        "novo": true,
        "featured": true,
        "position": "Senior Frontend Developer",
        "role": "Frontend",
        "level": "Senior",
        "postedAt": "1d ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["HTML", "CSS", "JavaScript"],
        "tools": []
      },
      {
        "id": 2,
        "company": "Manage",
        "logo": "https://i.ibb.co/Vj831xY/manage.png",
        "novo": true,
        "featured": true,
        "position": "Fullstack Developer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1d ago",
        "contract": "Part Time",
        "location": "Remote",
        "languages": ["Python"],
        "tools": ["React"]
      },
      {
        "id": 3,
        "company": "Account",
        "logo": "https://i.ibb.co/CP724Dh/account.png",
        "novo": true,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2d ago",
        "contract": "Part Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
      },
      {
        "id": 4,
        "company": "MyHome",
        "logo": "https://i.ibb.co/LgVHTXB/myhome.png",
        "novo": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "5d ago",
        "contract": "Contract",
        "location": "USA Only",
        "languages": ["CSS", "JavaScript"],
        "tools": []
      },
      {
        "id": 5,
        "company": "Loop Studios",
        "logo": "https://i.ibb.co/6YV5SDm/loop-studios.png",
        "novo": false,
        "featured": false,
        "position": "Software Engineer",
        "role": "FullStack",
        "level": "Midweight",
        "postedAt": "1w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["Ruby", "Sass"]
      },
      {
        "id": 6,
        "company": "FaceIt",
        "logo": "https://i.ibb.co/wr1knCy/faceit.png",
        "novo": false,
        "featured": false,
        "position": "Junior Backend Developer",
        "role": "Backend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "UK Only",
        "languages": ["Ruby"],
        "tools": ["RoR"]
      },
      {
        "id": 7,
        "company": "Shortly",
        "logo": "https://i.ibb.co/VpwXhR1/shortly.png",
        "novo": false,
        "featured": false,
        "position": "Junior Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["HTML", "JavaScript"],
        "tools": ["Sass"]
      },
      {
        "id": 8,
        "company": "Insure",
        "logo": "https://i.ibb.co/GpBY35c/insure.png",
        "novo": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["Vue", "Sass"]
      },
      {
        "id": 9,
        "company": "Eyecam Co.",
        "logo": "https://i.ibb.co/gFv7jb3/eyecam-co.png",
        "novo": false,
        "featured": false,
        "position": "Full Stack Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "3w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript", "Python"],
        "tools": ["Django"]
      },
      {
        "id": 10,
        "company": "The Air Filter Company",
        "logo": "https://i.ibb.co/PgGHdjd/the-air-filter-company.png",
        "novo": false,
        "featured": false,
        "position": "Front-end Dev",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "1mo ago",
        "contract": "Part Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
      }
    ],
    characteristics: [],
    filteredUsers: [],
  })

  const [store, dispatch] = useReducer(storeReducer, globalState)

  return (
    <GlobalContext.Provider value={[store, dispatch]}>
      {props.children}
    </GlobalContext.Provider>
  )
}