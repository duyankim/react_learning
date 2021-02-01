import React from "react";
import { UserContext, SetUserContext } from "./App";

function Greeting() {
  return (
    <SetUserContext.Consumer>
      {(setUser) => (
        <UserContext.Consumer>
          {({ username, helloCount }) => (
            <>
              <p>{`${username}님 안녕하세요`}</p>
              <p>{`인사 횟수: ${helloCount}`}</p>
              <button
                onClick={() =>
                  setUser({ username, helloCount: helloCount + 1 })
                }
              >
                인사하기
              </button>
            </>
          )}
        </UserContext.Consumer>
      )}
    </SetUserContext.Consumer>
  );
}

export default Greeting;
