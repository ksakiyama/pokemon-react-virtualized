import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { setFilterType, deleteFromFilterType } from "../actions";
import { withStyles } from "@material-ui/core/styles";
import { ALL_TYPES } from "../constants";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 5
  },
  button: {
    margin: 10
  }
});

class TypeFilterPaper extends React.Component {
  handleClick = inputType => {
    // すでに選択済みだったら検索条件から取り除く
    if (this.props.filterType.includes(inputType)) {
      this.props.deleteFromFilterType(inputType);
      return;
    }

    // すでに2つ選択されているときは動作しない
    if (this.props.filterType.length === 2) {
      return;
    }

    this.props.setFilterType(inputType);
  };

  render() {
    const { classes, filterType } = this.props;
    return (
      <Grid container className={classes.root} justify="center">
        <Grid item xs={12}>
          {/* TODO: Pagerだとかっこわるい。自分でdivする */}
          <Paper className={classes.paper}>
            {ALL_TYPES.map(type => {
              const variant = filterType.includes(type.english)
                ? "outlined"
                : "contained";
              // TODO: もう少しうまくやりたい。styled-component?classnames?
              let style;
              if (filterType.includes(type.english)) {
                style = {
                  color: type["color"],
                  fontWeight: "bold",
                  border: "1px solid " + type["color"]
                };
              } else {
                style = {
                  backgroundColor: type["color"],
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  border: "1px solid " + type["color"]
                };
              }
              return (
                <Button
                  key={type["english"]}
                  variant={variant}
                  size="small"
                  style={style}
                  className={classes.button}
                  onClick={() => this.handleClick(type["english"])}
                >
                  {type["japanese"]}
                </Button>
              );
            })}
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    filterType: state.filterType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFilterType: inputType => {
      dispatch(setFilterType(inputType));
    },
    deleteFromFilterType: inputType => {
      dispatch(deleteFromFilterType(inputType));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TypeFilterPaper));
