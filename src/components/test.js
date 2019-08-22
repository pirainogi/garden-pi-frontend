import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../actions/actions'
// import ToggleModal from './toggleModal';
import Modal from './modal';
import '../css/modal.css'

class Test extends Component {
  state = {
    showModal: false
  }

  handleShow = () => {
    this.setState({
      showModal: true
    })
  }

  handleHide = () => {
    this.setState({
      showModal: false
    })
  }

  render(){
    const modal = this.state.showModal
    ? (
      <Modal>
        <div id="outer-modal">
          <div className="inner-modal">
          <div className="modal-content">
          modal modal modal <button onClick={this.handleHide}>hide</button></div></div>
        </div>
      </Modal>
    )
    : null
    return(
      <div>
        parent file <button onClick={this.handleShow}>show modal</button>
        {modal}
      </div>
    )
  }

}

export default Test;
