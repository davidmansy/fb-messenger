import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ChatBar from "./ChatBar";
import Messages from "./Messages";

const MessagesWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 70%;
`;

const Chat = ({ match }) => {
  const { username } = match.params;

  return (
    <ChatWrapper>
      <ChatBar username={username} />
      <MessagesWrapper>
        <Messages username={username} />
      </MessagesWrapper>
    </ChatWrapper>
  );
};

Chat.propTypes = {
  match: PropTypes.object.isRequired
};

export default Chat;
