import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getAllPokemon } from "../actions";
import PokeGrid from "./PokeGrid";
import SearchBar from "./SearchBar";
import TypeFilterPaper from "./TypeFilterPaper"
import Dummy from "./Dummy";

class Root extends React.Component {
  componentDidMount() {
    this.props.getAllPokemon();
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar />
        <TypeFilterPaper />
        <Router>
          <Switch>
            <Route exact path="/" component={PokeGrid} />
            <Route path="/:id" component={Dummy} />
          </Switch>
        </Router>
      </React.Fragment>
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
)(Root);
