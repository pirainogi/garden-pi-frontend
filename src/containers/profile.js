import React from 'react';
import UserInfo from '../components/userinfo';
import EditUser from '../components/editUser';
import UserPlants from './userPlants';
import Header from '../components/header';
import Footer from '../components/footer';
import '../css/profile.css';

const Profile = () => {

  return(
    <div className="profile">
      <Header />
      <h1>I am the Profile Page</h1>
      <UserInfo />
      <EditUser />
      <UserPlants />
      <Footer />
    </div>
  )
}

export default Profile;
