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

export {
  loginUser
};
