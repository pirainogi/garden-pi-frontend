const defaultState = {
  currentUser: null,
}

function reducer(state = defaultState, action){
  // console.log('test reducer', action);
  switch(action.type) {

    case 'SIGNUP':
      return {...state, currentUser: action.payload}

    case 'LOGIN':
      return {...state, currentUser: action.payload}

    case 'LOGOUT':
      return {...state, currentUser: null}

    default:
      return state
  }

}

export default reducer;
