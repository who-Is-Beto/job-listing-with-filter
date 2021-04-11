const types = {
  addFilter: 'ADD_FILTER',
  clearFilter: 'CLEAR_FILTER',
  deleteElement: 'DELETE_ELEMENT',
  updateFilter: 'UPDATE_USERS',
}

const storeReducer = (state, action) => {
  switch (action.type) {

    case types.addFilter: {
      if (state.characteristics.includes(action.payload)) {
        return {
          ...state,
        }
      } else {
        return {
          ...state,
          characteristics: [...state.characteristics, action.payload]
        }
      }
    }

    case types.clearFilter: return {
      ...state,
      characteristics: []
    }

    case types.deleteElement: return {
      ...state,
      characteristics: state.characteristics.filter(items => items !== action.payload)
    }

    case types.updateFilter: return {
      ...state,
      filteredUsers: [...state.filteredUsers, action.payload]
    }

    default: return {
      state
    }
  }
}

export { types }
export default storeReducer