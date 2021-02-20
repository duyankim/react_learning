import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Subscribers from "./components/Subscribers";
import Views from "./components/Views";
import Display from "./components/Display";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Subscribers />
        <Views />
        <Display />
      </div>
    </Provider>
  );
}

export default App;
