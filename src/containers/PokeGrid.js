import React from "react";
import PokeCard from "../components/PokeCard";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { AutoSizer, List } from "react-virtualized";
import { CARD_WIDTH, CARD_HEIGHT } from "../constants";

const ROW_HEIGHT_MARGIN = 15;

const styles = theme => ({
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

class PokeGrid extends React.Component {
  render() {
    const { classes, pokemons } = this.props;

    return (
      <div className={classes.autosizer}>
        <AutoSizer>
          {({ height, width }) => {
            const itemsPerRow = Math.floor(width / CARD_WIDTH) || 1;
            const rowCount = Math.ceil(pokemons.length / itemsPerRow);
            return (
              <div>
                <List
                  width={width}
                  height={height}
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
                />
              </div>
            );
          }}
        </AutoSizer>
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
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(PokeGrid));
