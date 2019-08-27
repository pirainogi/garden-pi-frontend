import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Modal from '../components/modal';
import DeletePlantForm from '../components/deletePlantForm';
import HealthMeter from '../components/healthMeter';
import ToDo from './todo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../css/modal.css';
import '../css/currentPlantView.css'

const CurrentPlantView = (props) => {

  function groupName(){
    if(props.state.currentPlant){
      // console.log(props.state.currentPlant.id)
      let foundGroup = props.state.currentUser.groups.find(group =>
        group.plants.find(plant => plant.id === props.state.currentPlant.id))
      // console.log(foundGroup)
      return foundGroup.name
    }
  }

  let openCloseModal = () => {
    // console.log('clicking btn');
    props.toggleModal(props.state.showModal ? null : 'DeletePlant')
  }

  const modal = props.state.currentModal === 'DeletePlant'
  ? (
    <Modal>
      <div id="outer-modal">
        <div className="inner-modal">
          <div className="modal-content">
          <button onClick={() => openCloseModal()}><FontAwesomeIcon icon={faTimes} size='1x' color={'rgb(150, 171, 108)'}/></button>
          <DeletePlantForm />
          </div>
        </div>
      </div>
    </Modal>
  )
  : null

  // console.log('rendering the current plant props', props.state);
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
          {props.state.currentPlant ? <p className='garden-group-name'>{groupName()}</p> : <p className='garden-group-name'>group name</p>}
          <button className='remove-plant-btn' onClick={() => openCloseModal()}>remove plant</button>
          {modal}
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

export default connect(mapStateToProps, actions)(CurrentPlantView);
