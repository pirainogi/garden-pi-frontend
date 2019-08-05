import React from 'react';
import PlantCard from '../components/plantCard'
import '../css/plantCarousel.css'

const PlantCarousel = () => {

  return(
    <div className="plantCarousel">
      <span>This is where a scrolly bar of plants will live (I am a container)</span>
      <PlantCard />
      <PlantCard />
      <PlantCard />
    </div>
  )
}

export default PlantCarousel;
