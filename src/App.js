import Profile from "./Profile";
import React, { useState } from "react";

export const UserContext = React.createContext("");
export const ThemeContext = React.createContext("dark");

function App() {
  return (
    <div>
      <ThemeContext.Provider value="light">
        <UserContext.Provider value="mike">
          <Profile />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
