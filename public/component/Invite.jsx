import React from "react";
import TextLink from "./home/TextLink";

const Invite = () => {
  return (
    <div className="invite-section">
      <div className="invite-content">
        <h3>
          We’re in beta. <br /> Get your invite today!
        </h3>
        <TextLink linkText="GET AN INVITE" href="#" bgcolor="black" />
      </div>
    </div>
  );
};

export default Invite;
