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
      localStorage.setItem('token', data.jwt)
      dispatch({type: "LOGIN", payload: data.user})
    })
  }
}

function signupUser(userInfo){
  return dispatch => {
    fetch('http://localhost:3000//api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password
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

export {
  loginUser,
  signupUser,
  logoutUser,
};
