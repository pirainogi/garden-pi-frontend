import React from 'react';
import Header from '../components/header';
import PlantCarousel from './plantCarousel';
import CurrentPlantView from './currentPlantView';
import Footer from '../components/footer';

const Garden = () => {

  return(
    <div>
      <Header />
      <h1>This is where all of the plants live omg (I am a container)</h1>
      <PlantCarousel />
      <CurrentPlantView />
      <Footer />
    </div>
  )
}

export default Garden;
