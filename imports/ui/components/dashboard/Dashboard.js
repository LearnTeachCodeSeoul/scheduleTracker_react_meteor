import React from 'react';
import '../../../../client/main.css';
import ModalContainer from '../helpers/Modals/ModalContainer';
import Navbar from './Navbar';
import { Header, DashboardWrapper } from '../../styles/DashboardStyle';

class Dashboard extends React.Component {
  state = {
    showModal: false,
    modal: ''
  };

  toggleModalHandler = type => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      modal: type
    }));
  };

  render() {
    return (
      <DashboardWrapper>
        <ModalContainer
          showModal={this.state.showModal}
          toggleModalHandler={this.toggleModalHandler}
          modal={this.state.modal}
        />

        <Header>
          Schedule Tracker
        </Header>
      
        <Navbar toggleModalHandler={this.toggleModalHandler}/>

      </DashboardWrapper>
    );
  }
}

export default Dashboard;
