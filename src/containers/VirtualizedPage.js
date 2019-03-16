import React from "react";
import { connect } from "react-redux";
import { setAllPokemon } from "../actions";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { List, WindowScroller } from "react-virtualized";
import PokeCard from "../components/PokeCard";
import SearchArea from "../containers/SearchArea";
import ToggleButtonArea from "./ToggleButtonArea";
import LanguageSelectArea from "./LanguageSelectArea";
import Responsive from "react-responsive";
import { CARD_WIDTH, CARD_HEIGHT, ROW_HEIGHT_MARGIN } from "../constants";

import ToggleButtonAreaMobile from "./ToggleButtonAreaMobile";
import ToggleButtonAreaTablet from "./ToggleButtonAreaTablet";

const Desktop = props => <Responsive {...props} minWidth={960} />;
const Tablet = props => <Responsive {...props} minWidth={600} maxWidth={959} />;
// TODO: 横
const Mobile = props => <Responsive {...props} maxWidth={599} />;

const styles = theme => ({
  cardArea: {
    marginTop: 10
  },
  row: {
    display: "flex",
    justifyContent: "center"
  },
  lastRow: {
    display: "flex",
    justifyContent: "center"
  }
});

class VirtualizedPage extends React.Component {
  componentDidMount() {
    this.props.setAllPokemon();
  }

  render() {
    const { classes, pokemons, language } = this.props;
    return (
      <WindowScroller>
        {({ width, height, isScrolling, registerChild, scrollTop }) => {
          const extraSpace = width >= 950 ? 1 : 0;
          const itemsPerRow = Math.max(
            1,
            Math.floor(width / CARD_WIDTH) - extraSpace
          );
          const rowCount = Math.ceil(pokemons.length / itemsPerRow);
          return (
            <React.Fragment>
              <Desktop>
                <Grid container justify="center">
                  <Grid item>
                    <SearchArea />
                  </Grid>
                  <Grid item>
                    <LanguageSelectArea />
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
                    width={width}
                    height={height}
                    isScrolling={isScrolling}
                    scrollTop={scrollTop}
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
                        items.push(
                          <PokeCard
                            key={i}
                            pokemon={pokemons[i]}
                            language={language}
                          />
                        );
                      }
                      const emptySize = itemsPerRow - items.length;
                      for (let i = 0; i < emptySize; i++) {
                        items.push(<PokeCard key={i + toIndex} empty />);
                      }
                      return (
                        <div className={classes.row} key={key} style={style}>
                          {items}
                        </div>
                      );
                    }}
                  />
                </div>
              </Desktop>
              <Tablet>
                <Grid container justify="center">
                  <Grid item>
                    <SearchArea />
                  </Grid>
                  <Grid item>
                    <LanguageSelectArea />
                  </Grid>
                </Grid>
                <Grid container justify="center">
                  <Grid item>
                    <ToggleButtonAreaTablet />
                  </Grid>
                </Grid>

                <div ref={registerChild} className={classes.cardArea}>
                  <List
                    autoHeight
                    width={width}
                    height={height}
                    isScrolling={isScrolling}
                    scrollTop={scrollTop}
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
                        items.push(
                          <PokeCard
                            key={i}
                            pokemon={pokemons[i]}
                            language={language}
                          />
                        );
                      }
                      const emptySize = itemsPerRow - items.length;
                      for (let i = 0; i < emptySize; i++) {
                        items.push(<PokeCard key={i + toIndex} empty />);
                      }
                      return (
                        <div className={classes.row} key={key} style={style}>
                          {items}
                        </div>
                      );
                    }}
                  />
                </div>
              </Tablet>
              <Mobile>
                <Grid container justify="center">
                  <Grid item>
                    <SearchArea />
                  </Grid>
                  <Grid item>
                    <LanguageSelectArea />
                  </Grid>
                </Grid>
                <Grid container justify="center">
                  <Grid item>
                    <ToggleButtonAreaMobile />
                  </Grid>
                </Grid>

                <div ref={registerChild} className={classes.cardArea}>
                  <List
                    autoHeight
                    width={width}
                    height={height}
                    isScrolling={isScrolling}
                    scrollTop={scrollTop}
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
                        items.push(
                          <PokeCard
                            key={i}
                            pokemon={pokemons[i]}
                            language={language}
                          />
                        );
                      }
                      const emptySize = itemsPerRow - items.length;
                      for (let i = 0; i < emptySize; i++) {
                        items.push(<PokeCard key={i + toIndex} empty />);
                      }
                      return (
                        <div className={classes.row} key={key} style={style}>
                          {items}
                        </div>
                      );
                    }}
                  />
                </div>
              </Mobile>
            </React.Fragment>
          );
        }}
      </WindowScroller>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemons: state.displayedPokemons,
    language: state.language
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
)(withStyles(styles)(VirtualizedPage));
