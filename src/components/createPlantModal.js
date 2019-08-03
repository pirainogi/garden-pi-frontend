import React from 'react';
import ModalWrapper from '../containers/ModalWrapper';

const CreatePlantModal = props => {

  const createPlant = provider => {
    props.hideModal();
    props.signIn(provider)
  }

  return (
    <ModalWrapper
      {...props}
      title="Create a Plant"
      width={400}
      showOk={false}
    >

    <p>Create a plant</p>
    </ModalWrapper>
  )

}

export default CreatePlantModal;
