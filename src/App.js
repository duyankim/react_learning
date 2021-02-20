import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Subscribers from "./components/Subscribers";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Subscribers />
      </div>
    </Provider>
  );
}

export default App;
