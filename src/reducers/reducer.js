const types = {
  addFilter: 'ADD_FILTER',
  addUserFiltered: 'ADD_FILTERED_USERS',
  removeFilter: 'REMOVE_FILTER',
}

const storeReducer = (state, action) => {
  switch (action.type) {

    case types.addFilter: return {
      ...state,
      characteristics: [...state.characteristics, action.payload]
    }

    default: return {
      state
    }
  }
}

export { types }
export default storeReducer