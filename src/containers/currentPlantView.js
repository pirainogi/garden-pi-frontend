import React from 'react';
import HealthMeter from '../components/healthMeter';
import ToDo from './todo';

const CurrentPlantView = () => {

  return(
    <div>
      <h1>This is where information about a clicked plant will live and provide plant health information hurray</h1>
      <HealthMeter/>
      <ToDo/>
    </div>
  )

}

export default CurrentPlantView;
