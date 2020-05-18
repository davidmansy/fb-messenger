import React from "react";

const Chatbar = ({ selectedUser }) => {
  return (
    <div className="chat-bar">
      <h2>
        {selectedUser.name &&
          `${selectedUser.name.first} ${selectedUser.name.last}`}
      </h2>
      <div className="chat-menu">
        <i className="icon fas fa-phone" />
        <i className="icon fas fa-video" />
        <i className="icon fas fa-info-circle" />
      </div>
    </div>
  );
};

export default Chatbar;
