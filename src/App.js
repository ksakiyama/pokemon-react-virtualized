import React from "react";
import { connect } from "react-redux";
import { getAllPokemon } from "./actions";
import ToggleButtonArea from "./containers/ToggleButtonArea";
import SearchArea from "./containers/SearchArea";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// TODO: test window scroller
import { List, WindowScroller } from "react-virtualized";
import PokeCard from "./components/PokeCard";

// TODO: 固定値として持つ？
import { CARD_WIDTH, CARD_HEIGHT } from "./constants";
const ROW_HEIGHT_MARGIN = 15;

const styles = theme => ({
  root: {
    minWidth: 920
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
            // calc params
            const itemsPerRow = Math.floor(width / CARD_WIDTH) || 1;
            const rowCount = Math.ceil(pokemons.length / itemsPerRow);
            // render
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
                {/* <PokeGrid /> */}
                {/* TODO: 別コンポーネント化 */}
                <div ref={registerChild} className={classes.cardArea}>
                  <List
                    autoHeight
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

                      for (
                        let i = toIndex;
                        i < toIndex + itemsPerRow - items.length;
                        i++
                      ) {
                        items.push(<PokeCard key={i} empty />);
                      }
                      return (
                        <div className={classes.row} key={key} style={style}>
                          {items}
                        </div>
                      );
                    }}
                    scrollTop={scrollTop}
                    width={width}
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
