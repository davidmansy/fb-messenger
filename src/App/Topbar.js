import React from "react";

const Topbar = ({ toggleModal, userPosition, loggedUser }) => {
  return (
    <div className="top-bar">
      <i className="icon fab fa-facebook-messenger" />
      <a onClick={toggleModal} className={`username ${userPosition || "left"}`}>
        {loggedUser.name}
      </a>
    </div>
  );
};

export default Topbar;
