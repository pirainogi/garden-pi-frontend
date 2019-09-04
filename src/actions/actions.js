import * as api from '../services/api'

function autoLogin() {
  return dispatch => {
    api.autoLogin().then(data => {
      dispatch({ type: "AUTOLOGIN", payload: data.user })
    })
  }
}

function loginUser(userInfo) {
  return dispatch => {
    api.login({
      email: userInfo.email,
      password: userInfo.password
    }).then(data => {
      localStorage.setItem('token', data.jwt)
      dispatch({ type: "LOGIN", payload: data.user })
    })
  }
}

function signupUser(userInfo) {
  return dispatch => {
    api.signUp({
      name: userInfo.name,
      email: userInfo.email,
      password: userInfo.password
    }).then(data => {
      localStorage.setItem('token', data.jwt)
      dispatch({ type: "SIGNUP", payload: data.user })
    })
  }
}

function logoutUser() {
  return dispatch => {
    localStorage.removeItem('token')
    dispatch({ type: "LOGOUT" })
  }
}

function editUser(userInfo) {
  return dispatch => {
    api.editUser({
      name: userInfo.name,
      email: userInfo.email,
      password: userInfo.password,
    }).then(data => {
      dispatch({ type: "EDITUSER", payload: data })
    })
  }
}

function grabActions() {
  return dispatch => {
    api.getActions()
      .then(data => {
        dispatch({ type: "ACTIONS", payload: data })
      })
  }
}

function setCurrentPlant(plant) {
  return dispatch => {
    dispatch({ type: 'CURRENTPLANT', payload: plant })
  }
}

function toggleModal(modalType) {
  // console.log(modalType);
  return dispatch => {
    dispatch({ type: 'TOGGLEMODAL', payload: modalType })
  }
}

function createPlant(plantObj) {
  return dispatch => {
    api.createPlant(plantObj).then(data => {
      dispatch({ type: 'ADDPLANT', payload: data })
    })
  }
}

function deletePlant(plant) {
  console.log(plant.id);

  return dispatch => {
    api.deletePlant(plant.id)
      .then(data => {
        dispatch({ type: 'DELETEPLANT', payload: data })
      })
  }
}

function createPlantLog(plantID, actionID) {
  return dispatch => {
    api.createLog({
      plant_id: plantID,
      action_id: actionID,
      amount: null,
    })
      .then(data => {
        dispatch({ type: 'CREATEPLANTLOG', payload: data })
      })
  }
}

// function editPassword(password){
//   return dispatch => {
//     fetch('http://localhost:3000/api/v1/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify({
//         password: password,
//       })
//     })
//   }
// }

export {
  autoLogin,
  loginUser,
  signupUser,
  logoutUser,
  editUser,
  // editPassword,
  grabActions,
  setCurrentPlant,
  toggleModal,
  createPlant,
  deletePlant,
  createPlantLog,
};
