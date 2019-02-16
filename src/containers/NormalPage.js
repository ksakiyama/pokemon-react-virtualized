import React from "react";
import { connect } from "react-redux";
import { setAllPokemon } from "../actions";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PokeCard from "../components/PokeCard";
import SearchArea from "../containers/SearchArea";
import ToggleButtonArea from "./ToggleButtonArea";
import { MIN_WIDTH } from "../constants";

const styles = theme => ({
  root: {
    minWidth: MIN_WIDTH
  },
  gridArea: {
    flexGrow: 1,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5
  }
});

class NormalPage extends React.Component {
  componentDidMount() {
    this.props.setAllPokemon();
  }

  render() {
    const { classes, pokemons } = this.props;
    return (
      <div className={classes.root}>
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
        <div className={classes.gridArea}>
          <Grid container spacing={8} align="center">
            {pokemons.map(pokemon => {
              return (
                <Grid key={pokemon.id} item xs={3} sm={3} md={3}>
                  <PokeCard pokemon={pokemon} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemons: state.displayedPokemons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAllPokemon: () => {
      dispatch(setAllPokemon());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(NormalPage));
