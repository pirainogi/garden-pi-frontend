import React from 'react';
import Header from './header';
import Footer from './footer';
import '../css/about.css'

const About = () => {

  return(
    <div className='container'>
      <Header />
      <div className='about'>
        <div className='topbox'></div>
        <div className='about-content'>
          <div className='about-logo'></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum mi nec lectus scelerisque faucibus. Sed augue nulla, sodales quis justo vel, varius ullamcorper sem. Etiam vel magna at mauris consectetur sollicitudin ac in ipsum. Proin mauris libero, tempor porta scelerisque ac, vehicula vitae nunc. Quisque ornare facilisis orci. In tempus imperdiet lacus in euismod. Cras tortor est, tristique vitae laoreet eu, venenatis sit amet risus. Cras eget augue eros. Maecenas vulputate velit auctor ipsum hendrerit, ut convallis sem cursus.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;
