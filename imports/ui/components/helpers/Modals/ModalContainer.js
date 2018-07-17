import React from 'react';
import Modal from './Modal';
import {
  ModalMain,
  ModalWrapper,
  CloseButton
} from '../../../styles/ModalStyle';

const ModalContainer = ({ showModal, toggleModalHandler, modal, handleWeekChange }) => {
  const toggleDisplay = showModal ? true : false;

  return (
    <ModalWrapper toggle={toggleDisplay}>
      <CloseButton onClick={toggleModalHandler}>X</CloseButton>
      <ModalMain>
        <Modal modal={modal} 
               handleWeekChange={handleWeekChange}
        />
      </ModalMain>
    </ModalWrapper>
  );
};

export default ModalContainer;
