import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions'
// import ToggleModal from './toggleModal';
import Modal from './modal';
import '../css/modal.css'

class Test extends Component {

  openCloseModal = () => {
    this.props.toggleModal()
  }

  render(){
    console.log(this.props);
    const modal = this.props.state.currentModal
    ? (
      <Modal>
        <div id="outer-modal">
          <div className="inner-modal">
          <div className="modal-content">
          modal modal modal <button onClick={this.openCloseModal}>hide</button></div></div>
        </div>
      </Modal>
    )
    : null
    return(
      <div>
        parent file <button onClick={this.openCloseModal}>show modal</button>
        {modal}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  console.log('test modal', state);
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(Test);
