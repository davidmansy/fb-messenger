import React from "react";
import users from "../../mocks/users";
import messages from "../../mocks/messages.js";
import Threads from "./Threads";
import Chat from "./Chat";

const filterMessageByUsername = ({ username } = {}) => (message) =>
  message.from === username || message.to === username;

class Messenger extends React.Component {
  constructor(props) {
    super(props);
    const selectedUser = users[0];
    this.state = {
      selectedUser: selectedUser,
      messages: messages.filter(filterMessageByUsername(selectedUser)),
    };
  }

  selectUser = (user = {}) => {
    this.setState({
      selectedUser: user,
      messages: messages.filter(filterMessageByUsername(user)),
    });
  };

  render() {
    const { toggleModal } = this.props;
    const { selectedUser, messages } = this.state;

    return (
      <div className="messenger">
        <Threads
          toggleModal={toggleModal}
          users={users}
          selectedUser={selectedUser}
          selectUser={this.selectUser}
        />
        <Chat selectedUser={selectedUser} messages={messages} />
      </div>
    );
  }
}

export default Messenger;
