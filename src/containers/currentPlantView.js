import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Modal from '../components/modal';
import DeletePlantForm from '../components/deletePlantForm';
import Chart from '../components/chart';
import ToDo from './todo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import '../css/modal.css';
import '../css/currentPlantView.css'

class CurrentPlantView extends Component {

  state={
    data_tab: false,
  }

  groupName = () => {
    if(this.props.state.currentPlant){
      let foundGroup = this.props.state.currentUser.groups.find(group =>
        group.plants.find(plant => plant.id === this.props.state.currentPlant.id))
      return foundGroup.name
    }
  }

  openCloseModal = () => {
    this.props.toggleModal(this.props.state.showModal ? null : 'DeletePlant')
  }

  toggleDataTab = () => {
    // console.log('trying to change state', this.state.data_tab);
    this.setState({
      data_tab: true
    })
    // console.log('state change?', this.state.data_tab);
  }

  toggleInfoTab = () => {
    this.setState({
      data_tab: false
    })
  }


  render(){
    console.log('datatab', this.state.data_tab);
    const modal = this.props.state.currentModal === 'DeletePlant'
    ? (
      <Modal>
        <div id="outer-modal">
          <div className="inner-modal">
            <div className="modal-content">
            <div className='topbox-modal'>
              <button onClick={this.openCloseModal}><FontAwesomeIcon icon={faTimes} size='1x' color={'rgb(150, 171, 108)'}/></button>
            </div>
            <DeletePlantForm />
            </div>
          </div>
        </div>
      </Modal>
    )
    : null


    return(
      <div>{ this.props.state.currentPlant
        ?
        <div>
        { this.state.data_tab
        ?
          <div className="currentPlantView">
            <div className='upper-plant-view data-view'>
              <Chart/>
              <div className='right-plant-view'>
                <button className='data-tab' onClick={this.toggleDataTab}>data</button>
                <button className='info-tab' onClick={this.toggleInfoTab}>info</button>
              </div>
            </div>
          </div>
        :
          <div>
            <div className="currentPlantView">
              <div className='upper-plant-view'>
                <div className='left-plant-view'>
                  <div className='plant-basics'>
                    <p>{this.props.state.currentPlant.name}</p>
                    <div className='plant-pic'><span className='icon'><FontAwesomeIcon icon={faPagelines} size='5x' color={'white'}/></span></div>
                  </div>
                  <div className='plant-health'>
                    <p>family info here</p>
                    <p>age of plant</p>
                  </div>
                </div>
                <div className='right-plant-view'>
                  {this.props.state.currentPlant ? <p className='garden-group-name'>{this.groupName()}</p> : <p className='garden-group-name'>group name</p>}
                  <button className='remove-plant-btn' onClick={this.openCloseModal}>remove plant</button>
                  <button className='data-tab' onClick={this.toggleDataTab}>data</button>
                  <button className='info-tab' onClick={this.toggleInfoTab}>info</button>
                  {modal}
                </div>
              </div>
            </div>
            <ToDo/>
          </div>
        }
        </div>
        :
        <div>
          <div className="currentPlantView">
            <div className='upper-plant-view'>
              <div className='unpop-plant-view'>
                <p>Click on a Plant to View Details</p>
              </div>
            </div>
          </div>
          <ToDo/>
        </div>
      }
      </div>
    )
  }

} // end of class

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(CurrentPlantView);
