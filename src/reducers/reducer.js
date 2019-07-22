const defaultState = {
  currentUser: null,
}

function reducer(prevState, action){
  // console.log('test reducer', action);
  switch(action.type) {

    case 'LOGIN':
      return {...state, currentUser: action.payload}

    case 'LOGOUT':
      return {...state, currentUser: null}
      
    case 'SIGNUP':
      return {...state, currentUser: action.payload}

    default:
      return prevState
  }

}

export default reducer;
