import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
<<<<<<< HEAD

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
=======
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./redux/store";

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
>>>>>>> 8970029 (initial commit to this project)
