import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions.js';
import CreatePlantModal from '../components/FeedbackModal.jsx';
import DeletePlantModal from '../components/BoxDetailsModal.jsx';

const Modals = props => {
  switch (props.currentModal) {
    case 'CREATE_PLANT':
      return <CreatePlantModal {...props}/>;

    case 'DELETE_PLANT':
      return <DeletePlantModal {...props}/>;

    default:
      return null;
  }
}

export default Modals
