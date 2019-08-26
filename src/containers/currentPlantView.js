import React from 'react';
import { connect } from 'react-redux';
import HealthMeter from '../components/healthMeter';
import ToDo from './todo';
import '../css/currentPlantView.css'

const CurrentPlantView = (props) => {

  let deletePlant = () => {
    console.log('will maybe delete a plant');
  }

  console.log(props);
  return(
    <div className="currentPlantView">
      <div className='upper-plant-view'>
        <div className='left-plant-view'>
          <div className='plant-basics'>
            {props.state.currentPlant
              ? <p>{props.state.currentPlant.name}</p>
              : <p>plant name</p>
            }
            <div className='plant-pic'></div>
          </div>
          <div className='plant-health'>
            <p>family info here</p>
            <p>age of plant</p>
            <HealthMeter/>
          </div>
        </div>
        <div className='right-plant-view'>
          <p className='garden-group-name'>group name</p>
          <button className='remove-plant-btn' onClick={() => deletePlant()}>remove plant</button>
        </div>
      </div>
      <ToDo/>
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(CurrentPlantView);
