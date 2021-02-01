import Profile from "./Profile";
import React, { useState } from "react";

export const UserContext = React.createContext("");

function App() {
  const [username, setUsername] = useState("");
  return (
    <div>
      <UserContext.Provider value="mike">
        <Profile />
      </UserContext.Provider>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
}

export default App;
