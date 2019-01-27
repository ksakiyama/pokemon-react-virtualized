import React from "react";
import { connect } from "react-redux";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getAllPokemon } from "./actions";
// import PokeGrid from "./containers/PokeGrid";
import ToggleButtonArea from "./containers/ToggleButtonArea";
import SearchArea from "./containers/SearchArea";
// import SearchBar from "./SearchBar";
// import TypeFilterPaper from "./containers/TypeFilterPaper";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
// import Dummy from "./containers/Dummy";

// TODO: test window scroller
import { List, WindowScroller } from "react-virtualized";
import PokeCard from "./components/PokeCard";
import { CARD_WIDTH, CARD_HEIGHT } from "./constants";
const ROW_HEIGHT_MARGIN = 15;

const styles = theme => ({
  root: {
    minWidth: 920
  },
  autosizer: {
    height: "calc(100vh - 155px)", // TODO: 動的に調整できないか
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 1,
    boxShadow: "1px 1px 0px 0px #CCC inset"
  },
  row: {
    display: "flex",
    // TODO: 左寄せにしたい。いまは中央揃え
    justifyContent: "space-around"
  }
});

class App extends React.Component {
  componentDidMount() {
    this.props.getAllPokemon();
  }

  render() {
    const { classes, pokemons } = this.props;
    return (
      <WindowScroller>
        {({ width, height, isScrolling, registerChild, scrollTop }) => {
          // calc params
          const itemsPerRow = Math.floor(width / CARD_WIDTH) || 1;
          const rowCount = Math.ceil(pokemons.length / itemsPerRow);

          // render
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
              {/* <PokeGrid /> */}
              <div ref={registerChild}>
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
            </div>
          );
        }}
      </WindowScroller>
    );
  }

  // render() {
  //   const { classes } = this.props;
  //   return (
  //     <div className={classes.root}>
  //       <CssBaseline />
  //       <Grid container justify="center">
  //         <Grid item>
  //           <SearchArea />
  //         </Grid>
  //       </Grid>
  //       <Grid container justify="center">
  //         <Grid item>
  //           <ToggleButtonArea />
  //         </Grid>
  //       </Grid>
  //       {/* <SearchBar /> */}
  //       {/* <TypeFilterPaper /> */}
  //       <PokeGrid />
  //     </div>
  //   );
  // }
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
