import React from "react";

const Link = ({ to, children }) => {
  return (
    <a target="_blank" href={to}>
      {children}
    </a>
  );
};

export default Link;
