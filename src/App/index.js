import React, { Component } from "react";
import Modal from "./Layout/Modal";
import Topbar from "./Topbar";
import Messenger from "./Messenger";
import Footer from "./Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
  }

  toggleModal = () => {
    this.setState((state) => ({
      showModal: !state.showModal,
    }));
  };

  showSettings = () => {
    this.toggleModal();
  };

  render() {
    const loggedUser = { name: "Alex" };
    const { showModal } = this.state;
    const userPosition = "right";

    return (
      <div className="app">
        <Modal show={showModal} toggleModal={this.toggleModal} />
        <Topbar
          toggleModal={this.toggleModal}
          userPosition={userPosition}
          loggedUser={loggedUser}
        />
        <Messenger toggleModal={this.toggleModal} />
        <Footer />
      </div>
    );
  }
}

export default App;
