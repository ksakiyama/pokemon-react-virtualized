import React from "react";
import ReactDOM from "react-dom";
// root container
import App from "./App";
// Material ui
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// Redux
import { Provider } from "react-redux";
import configureStore from "./store/configure-store";
// CSS
import "./index.css";
import "react-virtualized/styles.css";
// Service worker
// import * as serviceWorker from "./serviceWorker";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5FAC62"
    },
    secondary: {
      main: "#E5B649"
    },
    background: {
      default: "#FAFAFA"
    }
  }
});

const initialState = {
  pokemons: [],
  displayedPokemons: [],
  filterName: "",
  filterType: [],
  error: null
};

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
