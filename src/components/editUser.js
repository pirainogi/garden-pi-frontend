import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Modal from './modal';
import EditUserForm from '../components/editUserForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../css/modal.css'
import '../css/editUser.css'

class EditUser extends Component {

  openCloseModal = () => {
    console.log('clicking btn');
    this.props.toggleModal(this.props.state.showModal ? null : 'EditUser')
  }

  render(){
    // console.log('edit user render', this.props.state);
    const modal = this.props.state.currentModal === 'EditUser'
    ? (
      <Modal>
        <div id="outer-modal">
          <div className="inner-modal">
            <div className="modal-content">
            <button onClick={this.openCloseModal}><FontAwesomeIcon icon={faTimes} size='1x' color={'rgb(150, 171, 108)'}/></button>
            <EditUserForm />
            </div>
          </div>
        </div>
      </Modal>
    )
    : null
    return(
      <div className="editUser">
        <button className="edit-user-btn" onClick={this.openCloseModal}>click me to edit user</button>
        {modal}
      </div>
    )
  }

} // end of class

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(EditUser);
