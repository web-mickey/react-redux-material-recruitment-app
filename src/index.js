import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";

const theme = createMuiTheme({});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
