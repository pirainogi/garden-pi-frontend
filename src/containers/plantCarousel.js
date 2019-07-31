import React from 'react';
import PlantCard from '../components/plantCard'

const PlantCarousel = () => {

  return(
    <div>
      <h1>This is where a scrolly bar of plants will live (I am a container)</h1>
      <PlantCard />
      <PlantCard />
      <PlantCard />
    </div>
  )
}

export default PlantCarousel;
