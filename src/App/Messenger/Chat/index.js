import React from "react";
import Chatbar from "./Chatbar";
import Messages from "./Messages";
import UserDetail from "./UserDetail";

const Chat = ({ selectedUser, messages }) => {
  return (
    <div className="chat">
      <Chatbar selectedUser={selectedUser} />
      <div className="chat-content">
        <Messages messages={messages} selectedUser={selectedUser} />
        <UserDetail selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default Chat;
