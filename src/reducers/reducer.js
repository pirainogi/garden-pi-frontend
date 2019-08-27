const defaultState = {
  currentUser: null,
  currentPlant: null,
  actions: null,
  showModal: false,
  currentModal: null,
}

function reducer(state = defaultState, action){
  switch(action.type) {

    case 'SIGNUP':
      return {...state, currentUser: action.payload}

    case 'LOGIN':
      return {...state, currentUser: action.payload}

    case 'AUTOLOGIN':
      return {...state, currentUser: action.payload}

    case 'LOGOUT':
      return {...state, currentUser: null}

    case 'EDITUSER':
      return {...state, currentUser: action.payload}

    case 'ACTIONS':
      return {...state, actions: action.payload}

    case 'CURRENTPLANT':
      return {...state, currentPlant: action.payload}

    case 'TOGGLEMODAL':
      return {...state, showModal: !state.showModal, currentModal: action.payload}

    case 'DELETEPLANT':
      let filteredPlants = state.currentUser.groups.map(group => {
        return {
          id: group.id,
          name: group.name,
          plants: group.plants.filter(plant => {
          return plant.id !== action.payload.id}),
        }
      })
      return {...state, showModal: null, currentModal: null, currentPlant: null, currentUser: {
          ...state.currentUser.groups, groups: filteredPlants}}

    case 'CREATEPLANTLOG':
      console.log(action.payload)
      return {...state, currentPlant: {
        ...state.currentPlant, logs: [
        ...state.currentPlant.logs, action.payload]}}

    default:
      return state
  }

}

export default reducer;
