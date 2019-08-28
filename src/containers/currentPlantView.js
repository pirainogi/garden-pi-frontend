import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Modal from '../components/modal';
import DeletePlantForm from '../components/deletePlantForm';
import HealthMeter from '../components/healthMeter';
import ToDo from './todo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faTree } from '@fortawesome/free-solid-svg-icons'
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import '../css/modal.css';
import '../css/currentPlantView.css'

const CurrentPlantView = (props) => {

  function groupName(){
    if(props.state.currentPlant){
      let foundGroup = props.state.currentUser.groups.find(group =>
        group.plants.find(plant => plant.id === props.state.currentPlant.id))
      return foundGroup.name
    }
  }

  let openCloseModal = () => {
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

  return(
    <div>{ props.state.currentPlant
      ?
      <div className="currentPlantView">
        <div className='upper-plant-view'>
          <div className='left-plant-view'>
            <div className='plant-basics'>
              <p>{props.state.currentPlant.name}</p>
              <div className='plant-pic'><span className='icon'><FontAwesomeIcon icon={faPagelines} size='5x' color={'white'}/></span></div>
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
      </div>
      :
      <div className="currentPlantView">
        <div className='upper-plant-view'>
          <div className='unpop-plant-view'>
            <p>Click on a Plant to View Details</p>
          </div>
        </div>
      </div>
    }
      <ToDo/>
    </div>
  )

} // end of class

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(CurrentPlantView);
