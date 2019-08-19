import React from 'react';
import { connect } from 'react-redux';
import PlantCard from '../components/plantCard'
import '../css/plantCarousel.css'

const PlantCarousel = () => {
  //
  // renderPlants = () => {
  //   if (this.props.state.currentUser) {
  //     return this.props.state.currentUser.groups.map(group => {
  //       return group.plants.map(plant => {
  //         // console.log(plant);
  //         return <PlantCard key={plant.id} plant={plant}/>
  //       })
  //     })
  //   }
  // }

  return(
    <div className="plantCarousel">
      <PlantCard />
      <PlantCard />
      <PlantCard />
      <PlantCard />
      <PlantCard />
      <PlantCard />
      <PlantCard />
      <PlantCard />
      <PlantCard />
      <PlantCard />
      <PlantCard />
      <PlantCard />
      <PlantCard />
      <PlantCard />
    </div>
  )
}

const mapStateToProps = (state) => {
  // console.log(`user's plants`, state);
  return {
    state
  }
}

export default connect(mapStateToProps)(PlantCarousel);
