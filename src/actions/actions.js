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
     .then(data => dispatch({
       type: "LOGIN", payload: data.user
     }))
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
    // .then(data => console.log(data))
    .then(data => dispatch({
      type: "SIGNUP", payload: data.user
    }))
  }
}

export {
  loginUser,
  signupUser
};
