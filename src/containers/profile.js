import React from 'react';
import UserInfo from '../components/userInfo';
import EditUser from '../components/editUser';
import Header from '../components/header';

const Profile = () => {

  return(
    <div>
      <Header />
      <h1>I am the Profile Page</h1>
      <UserInfo />
      <EditUser />
    </div>
  )
}

export default Profile;
