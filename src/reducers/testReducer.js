const defaultState = {
  result: 'empty'
}

function reducer(prevState = defaultState, action){
  console.log('test reducer', action);
  switch (action.type) {

   case 'TEST_ACTION':
    return {
     result: action.payload
   }
   default:
    return prevState
  }

}

export default reducer;
