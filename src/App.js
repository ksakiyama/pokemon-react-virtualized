import React from "react";
import { connect } from "react-redux";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getAllPokemon } from "./actions";
import PokeGrid from "./containers/PokeGrid";
import ToggleButtonArea from "./containers/ToggleButtonArea";
import SearchArea from "./containers/SearchArea";
// import SearchBar from "./SearchBar";
// import TypeFilterPaper from "./containers/TypeFilterPaper";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
// import Dummy from "./containers/Dummy";

const styles = theme => ({
  root: {
    minWidth: 920
  }
});

class App extends React.Component {
  componentDidMount() {
    this.props.getAllPokemon();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Grid container justify="center">
          <Grid item>
            <SearchArea />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item>
            <ToggleButtonArea />
          </Grid>
        </Grid>
        {/* <SearchBar /> */}
        {/* <TypeFilterPaper /> */}
        <PokeGrid />
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    getAllPokemon: () => {
      dispatch(getAllPokemon());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
