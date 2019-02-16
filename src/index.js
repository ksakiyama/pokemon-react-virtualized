import React from "react";
import ReactDOM from "react-dom";
// root container
import App from "./App";
// Material ui
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// Redux
import { Provider } from "react-redux";
import configureStore from "./store/configure-store";
// CSS
import "./index.css";
import "react-virtualized/styles.css";

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
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);