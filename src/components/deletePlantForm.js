import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import '../css/editUserForm.css';

class DeletePlantForm extends Component {

  state = {
    confirm: false,
  }

  handleChange = (e) => {
    this.setState({
      confirm: !this.state.confirm
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log('sending the edit user fetch');
    this.props.deletePlant(this.props.state.currentPlant.id)
    this.props.toggleModal(null)
  }

  render(){
    console.log(this.state);
    return(
      this.props.state.currentPlant
      ? <div className="deletePlantForm">
          <h1>delete plant one day</h1>
          <form>
            <label>yes i want to delete {this.props.state.currentPlant.name}</label>
            <input type="checkbox" onChange={this.handleChange}/>
          </form>
        </div>
      : <div>
        <p>You haven't selected a plant to delete! Please select a plant and try again.</p>
      </div>

    )
  }

} // end of class

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(DeletePlantForm);

// <checkbox>are you sure you want to delete {this.props.state.currcurrentPlant.name}</checkbox>
