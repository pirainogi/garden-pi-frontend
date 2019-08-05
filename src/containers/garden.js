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
      <PlantCarousel />
      <CurrentPlantView />
      <Footer />
    </div>
  )
}

export default Garden;
