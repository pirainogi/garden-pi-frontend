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
      <div className='topbox'>
        <div className='default-pic'></div>
      </div>

      <div>
        <h1>I am the Profile Page</h1>
      </div>
      <UserInfo />
      <EditUser />
      <UserPlants />
      <Footer />
    </div>
  )
}

export default Profile;
