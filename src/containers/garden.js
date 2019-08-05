import React from 'react';
import Header from '../components/header';
import PlantCarousel from './plantCarousel';
import CurrentPlantView from './currentPlantView';
import Footer from '../components/footer';
import '../css/garden.css'

const Garden = () => {

  return(
    <div className="garden">
      <Header />
      <span>This is where all of the plants live omg (I am a container)</span>
      <PlantCarousel />
      <CurrentPlantView />
      <Footer />
    </div>
  )
}

export default Garden;
