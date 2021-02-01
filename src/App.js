import Profile from "./Profile";
import React, { useState } from "react";

export const UserContext = React.createContext({ username: "", helloCount: 0 });
export const SetUserContext = React.createContext(() => {});

function App() {
  const [user, setUser] = useState({ username: "Ariana", helloCount: 0 });
  return (
    <div>
      <SetUserContext.Provider value={setUser}>
        <UserContext.Provider value={user}>
          <Profile />
        </UserContext.Provider>
      </SetUserContext.Provider>
    </div>
  );
}

export default App;
