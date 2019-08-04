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
        <div className='inner-profile'>
          <div className='user-info'>
            <div className='default-pic'></div>
            <UserInfo />
            <EditUser />
          </div>
          <div className='plant-info'>
            <UserPlants />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile;
