import React from "react";
import Greeting from "./Greeting";

const Profile = React.memo(() => {
  return (
    <div>
      <Greeting />
    </div>
  );
});

export default Profile;
