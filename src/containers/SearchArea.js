import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import { connect } from "react-redux";
import { setFilterName } from "../actions";

const styles = {
  paper: {
    marginTop: 10,
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 300
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  }
};

class SearchArea extends React.Component {
  handleTextChange = event => {
    this.props.handleTextChange(event.target.value);
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.paper} elevation={3}>
        <InputBase
          className={classes.input}
          placeholder="Search…"
          onChange={this.handleTextChange}
        />
        <IconButton className={classes.iconButton} aria-label="Search">
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    handleTextChange: searchString => {
      dispatch(setFilterName(searchString));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SearchArea));
