import React from "react";
import { connect } from "react-redux";
import { getAllPokemon } from "./actions";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { List, WindowScroller } from "react-virtualized";
import PokeCard from "./components/PokeCard";
import SearchArea from "./containers/SearchArea";
import ToggleButtonArea from "./containers/ToggleButtonArea";
import {
  MIN_WIDTH,
  CARD_WIDTH,
  CARD_HEIGHT,
  ROW_HEIGHT_MARGIN
} from "./constants";

const styles = theme => ({
  root: {
    minWidth: MIN_WIDTH
  },
  cardArea: {
    marginTop: 10
  },
  row: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center"
  },
  lastRow: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around"
  },
  empty: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginLeft: 5,
    marginRight: 5
  }
});

class App extends React.Component {
  componentDidMount() {
    this.props.getAllPokemon();
  }

  render() {
    const { classes, pokemons } = this.props;
    return (
      <div className={classes.root}>
        <WindowScroller>
          {({ width, height, isScrolling, registerChild, scrollTop }) => {
            const itemsPerRow = Math.floor(width / CARD_WIDTH) || 1;
            const rowCount = Math.ceil(pokemons.length / itemsPerRow);
            return (
              <React.Fragment>
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
                <div ref={registerChild} className={classes.cardArea}>
                  <List
                    autoHeight
                    width={width < MIN_WIDTH ? MIN_WIDTH : width}
                    height={height}
                    isScrolling={isScrolling}
                    rowCount={rowCount}
                    rowHeight={CARD_HEIGHT + ROW_HEIGHT_MARGIN}
                    rowRenderer={({ index, key, style }) => {
                      const items = [];
                      const fromIndex = index * itemsPerRow;
                      const toIndex = Math.min(
                        fromIndex + itemsPerRow,
                        pokemons.length
                      );
                      for (let i = fromIndex; i < toIndex; i++) {
                        items.push(<PokeCard key={i} pokemon={pokemons[i]} />);
                      }
                      for (let i = 0; i < itemsPerRow - items.length; i++) {
                        items.push(<PokeCard key={i + toIndex} empty />);
                      }
                      return (
                        <div className={classes.row} key={key} style={style}>
                          {items}
                        </div>
                      );
                    }}
                    scrollTop={scrollTop}
                  />
                </div>
              </React.Fragment>
            );
          }}
        </WindowScroller>
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
    getAllPokemon: () => {
      dispatch(getAllPokemon());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
