const defaultState = {
  currentUser: null,
}

function reducer(state = defaultState, action){
  // console.log('test reducer', action);
  switch(action.type) {

   case 'LOGIN':
    return {...state, currentUser: action.payload}
   default:
    return state
  }

}

export default reducer;
