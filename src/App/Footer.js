import React from "react";
import LeanJSLogo from "./Layout/LeanJSLogo";
import Link from "../App/Layout/Link";

const Footer = () => (
  <div className="footer">
    <ul>
      <li>
        <Link to="https://reactjs.academy">ReactJS Academy</Link>
      </li>
      <li>by</li>
      <li>
        <Link to="https://leanjs.com">
          <LeanJSLogo width={25} />
        </Link>
      </li>
    </ul>
  </div>
);

export default Footer;
