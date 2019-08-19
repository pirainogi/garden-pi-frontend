import React from 'react';
import { connect } from 'react-redux';
import PlantCard from '../components/plantCard'
import '../css/plantCarousel.css'

const PlantCarousel = (props) => {

  function renderPlants(){
    if (props.state.currentUser) {
      return props.state.currentUser.groups.map(group => {
        return group.plants.map(plant => {
          // console.log(plant);
          return <PlantCard key={plant.id} plant={plant}/>
        })
      })
    }
  }
  
  // console.log(props);

  return(
    <div className="plantCarousel">
      {renderPlants()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(PlantCarousel);
