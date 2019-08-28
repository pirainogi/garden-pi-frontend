import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Modal from '../components/modal';
import PlantCard from '../components/plantCard';
import CreatePlantForm from '../components/createPlantForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../css/modal.css';
import '../css/userPlants.css';

class UserPlants extends Component {

  // createPlant = () => {
  //   console.log('clicking the create plant button');
  // }

  openCloseModal = () => {
    // console.log('clicking btn');
    this.props.toggleModal(this.props.state.showModal ? null : 'CreatePlant')
  }

  renderPlants = () => {
    if (this.props.state.currentUser) {
      return this.props.state.currentUser.groups.map(group => {
        return group.plants.map(plant => {
          // console.log(plant);
          return <PlantCard key={plant.id} plant={plant} />
        })
      })
    }
  }

  render() {
    // console.log('user info render', this.props.state.currentUser);
    const modal = this.props.state.currentModal === 'CreatePlant'
      ? (
        <Modal>
          <div id="outer-modal">
            <div className="inner-modal">
              <div className="modal-content">
                <div className='topbox-modal'>
                  <button onClick={this.openCloseModal}><FontAwesomeIcon icon={faTimes} size='1x' color={'rgb(150, 171, 108)'} /></button>
                  <CreatePlantForm />
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )
      : null

    return (
      <div className="userPlants">
        <div className='user-plant-title'>
          <span>My Plants</span>
        </div>
        <div className='create-plant-row'>
          <button className='create-plant-btn' onClick={this.openCloseModal}>Create New Plant</button>
          {modal}
        </div>
        <div className='plant-card-container'>
          {this.renderPlants()}
        </div>
      </div>
    )
  }

} // end of class

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(UserPlants);
