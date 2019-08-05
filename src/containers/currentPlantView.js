import React from 'react';
import HealthMeter from '../components/healthMeter';
import ToDo from './todo';
import '../css/currentPlantView.css'

const CurrentPlantView = () => {

  return(
    <div className="currentPlantView">
      <div className='upper-plant-view'>
        <div>
          <p>plant name</p>
          <div className='plant-pic'></div>
        </div>
        <div>
          <p>family info here</p>
          <p>age of plant</p>
          <HealthMeter/>
        </div>
        <div>
          <p>group name</p>
          <button>remove plant</button>
        </div>
      </div>
      <ToDo/>
    </div>
  )

}

export default CurrentPlantView;
