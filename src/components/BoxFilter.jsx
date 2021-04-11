import { useContext } from 'react'
import { GlobalContext } from '../Context'
import { types } from '../reducers/reducer'
import '../styles/boxFilter.css'

function BoxFilter() {

  const [store, dispatch] = useContext(GlobalContext)
  const { characteristics } = store

  const handleClear = () => {
    dispatch({ type: types.clearFilter })
  }

  const handleDelete = (characteristic) => {
    dispatch({ type: types.deleteElement, payload: characteristic })
  }

  return (
    <div className="boxFilter__container">
      <ul>
        {characteristics.map((characteristic) => (
          <li key={characteristic} className="itemFiltered"><p>{characteristic}</p>
            <button onClick={() => handleDelete(characteristic)} className='x__button'><i className="fas fa-times"></i></button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleClear()} className='clear__button'>Clear</button>
    </div>
  )
}

export default BoxFilter
