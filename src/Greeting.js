import React from "react";
import { UserContext, ThemeContext } from "./App";

function Greeting() {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <UserContext.Consumer>
          {(username) => (
            <p
              style={{ color: theme === "dark" ? "gray" : "green" }}
            >{`${username}님 안녕하세요`}</p>
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}

export default Greeting;
