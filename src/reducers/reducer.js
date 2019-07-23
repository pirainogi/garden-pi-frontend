const defaultState = {
  currentUser: null,
}

function reducer(prevState, action){
  // console.log('test reducer', action);
  switch(action.type) {

    case 'LOGIN':
      return {...prevState, currentUser: action.payload}

    case 'LOGOUT':
      return {...prevState, currentUser: null}

    case 'SIGNUP':
      return {...prevState, currentUser: action.payload}

    default:
      return prevState
  }

}

export default reducer;
