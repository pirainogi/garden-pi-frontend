function autoLogin(){
  return dispatch => {
    const token = localStorage.getItem('token')
    // console.log('in autologin', token);
    if (token){
      fetch('http://localhost:3000/api/v1/auto_login', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(res => res.json())
      .then(data => {
        dispatch({type: "AUTOLOGIN", payload: data.user})
      })
    }
  }
}

function loginUser(userInfo){
  return dispatch => {
     fetch('http://localhost:3000/api/v1/login', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       },
       body: JSON.stringify({
         email: userInfo.email,
         password: userInfo.password
       })
     })
    .then(res => res.json())
    .then(data => {
      console.log('data back from server', data);
      localStorage.setItem('token', data.jwt)
      dispatch({type: "LOGIN", payload: data.user})
    })
  }
}

function signupUser(userInfo){
  return dispatch => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: userInfo.name,
        email: userInfo.email,
      })
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('token', data.jwt)
      dispatch({type: "SIGNUP", payload: data.user})
    })
  }
}

function logoutUser(){
  return dispatch => {
    localStorage.removeItem('token')
    dispatch({type: "LOGOUT"})
  }
}

function editUser(userInfo){
  return dispatch => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
      })
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      dispatch({type: "EDITUSER", payload: data.user})
    })
  }
}

function grabActions(){
  return dispatch => {
    fetch('http://localhost:3000/api/v1/actions')
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      dispatch({type: "ACTIONS", payload: data})
    })
  }
}

function setCurrentPlant(plant){
  return dispatch => {
    dispatch({type: 'CURRENTPLANT', payload: plant})
  }
}

function toggleModal(modalType){
  // console.log(modalType);
  return dispatch => {
    dispatch({type: 'TOGGLEMODAL', payload: modalType})
  }
}

function deletePlant(plant){
  console.log(plant.id);

  return dispatch => {
    const token = localStorage.getItem('token')
    if(token){
      fetch(`http://localhost:3000/api/v1/plants/${plant.id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        dispatch({type: 'DELETEPLANT', payload: data})
      })
    }
  }
}

function createPlantLog(plantID, actionID){
  return dispatch => {
    const token = localStorage.getItem('token')
    if(token){
      fetch('http://localhost:3000/api/v1/logs', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          plant_id: plantID,
          action_id: actionID,
          amount: null,
        })
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        dispatch({type: 'CREATEPLANTLOG', payload: data})
      })
    }
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
  deletePlant,
  createPlantLog,
};
