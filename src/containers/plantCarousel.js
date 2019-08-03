import React from 'react';
import PlantCard from '../components/plantCard'
import '../css/plantCarousel.css'

const PlantCarousel = () => {

  return(
    <div className="plantCarousel">
      <h1>This is where a scrolly bar of plants will live (I am a container)</h1>
      <PlantCard />
      <PlantCard />
      <PlantCard />
    </div>
  )
}

export default PlantCarousel;
