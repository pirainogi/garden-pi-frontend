import React, { Component } from 'react';
import { connect } from 'react-redux';
import dayjs from 'dayjs'
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

  state = {
    activeTab: "info",
  }

  groupName = () => {
    if (this.props.state.currentPlant) {
      let foundGroup = this.props.state.currentUser.groups.find(group =>
        group.plants.find(plant => plant.id === this.props.state.currentPlant.id))
      return foundGroup.name
    }
  }

  openCloseModal = () => {
    this.props.toggleModal(this.props.state.showModal ? null : 'DeletePlant')
  }

  toggleTab = activeTab => this.setState({ activeTab })

  getMeasurements() {
    return this.props.state.currentPlant.measurements
      .map(m => ({
        label: dayjs(m.timestamp * 1000),
        moisture: parseFloat(m.moisture),
        temperature: parseInt(m.temperature),
        humidity: parseInt(m.humidity)
      }))
  }

  getTabContent() {
    switch (this.state.activeTab) {
      case "info":
        return (
          <>
            <div className='left-plant-view'>
              <div className='plant-basics'>
                <p>{this.props.state.currentPlant.name}</p>
                <div className='plant-pic'><span className='icon'><FontAwesomeIcon icon={faPagelines} size='5x' color={'white'} /></span></div>
              </div>
              <div className='plant-health'>
                <p>family info here</p>
                <p>age of plant</p>
              </div>
            </div>
            <div className='right-plant-view'>
              {this.props.state.currentPlant ? <p className='garden-group-name'>{this.groupName()}</p> : <p className='garden-group-name'>group name</p>}
              <button className='remove-plant-btn' onClick={this.openCloseModal}>remove plant</button>
              {this.getModal()}
            </div>
          </>
        );
      case "temperature":
        return <Chart
          measurements={this.getMeasurements()}
          name={this.props.state.currentPlant.name}
          dataKey="temperature"
          chartTitle="Temperature"
          chartLabel="Degrees C"
        />
      case "humidity":
        return <Chart
          measurements={this.getMeasurements()}
          name={this.props.state.currentPlant.name}
          dataKey="humidity"
          chartTitle="Humidity"
          chartLabel="% Humidity"
        />
      case "moisture":
        return <Chart
          measurements={this.getMeasurements()}
          name={this.props.state.currentPlant.name}
          dataKey="moisture"
          chartTitle="Moisture"
          chartLabel="Moist/Not Moist"
        />
      default:
        return null;
    }
  }

  getModal() {
    if (this.props.state.currentModal !== 'DeletePlant') return null;
    return (
      <Modal>
        <div id="outer-modal">
          <div className="inner-modal">
            <div className="modal-content">
              <div className='topbox-modal'>
                <button onClick={this.openCloseModal}><FontAwesomeIcon icon={faTimes} size='1x' color={'rgb(150, 171, 108)'} /></button>
              </div>
              <DeletePlantForm />
            </div>
          </div>
        </div>
      </Modal>
    )
  }

  render() {
    if (!this.props.state.currentPlant) {
      return (
        <div>
          <div className="currentPlantView">
            <div className='upper-plant-view'>
              <div className='unpop-plant-view'>
                <p>Click on a Plant to View Details</p>
              </div>
            </div>
          </div>
          <ToDo />
        </div>
      )
    }

    return (
      <div>
        <div className="currentPlantView">
          <div className="tab-list">
            <button className='tab' onClick={() => this.toggleTab("info")}>info</button>
            <button className='tab' onClick={() => this.toggleTab("temperature")}>temperature</button>
            <button className='tab' onClick={() => this.toggleTab("humidity")}>humidity</button>
            <button className='tab' onClick={() => this.toggleTab("moisture")}>moisture</button>
          </div>
          {this.getTabContent()}
        </div>
        <ToDo />
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
