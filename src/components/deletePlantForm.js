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
    // this.props.editUser(this.state)
    this.props.toggleModal(null)
  }

  render(){
    console.log(this.state);
    return(
      <div className="deletePlantForm">
        <h1>delete plant one day</h1>
        <form>
          <label>yes i want to delete this thing</label>
          <input type="checkbox" onChange={this.handleChange}/>
        </form>
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
