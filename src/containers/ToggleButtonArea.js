import React from "react";
import { connect } from "react-redux";
import { setFilterType, deleteFromFilterType } from "../actions";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
// import { ALL_TYPES } from "../constants";

const styles = theme => ({
  toggleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  paper: {
    marginTop: 10
  },
  toggleGroup: {
    background: "#fff"
  },
  toggleButton: {
    fontSize: 12,
    width: 90
  }
});

class ToggleButtons extends React.Component {
  state = {
    alignment: []
  };

  handleClick = (event, inputType) => {
    if (this.props.filterType.includes(inputType)) {
      this.props.deleteFromFilterType(inputType);
      return;
    }

    // すでに2つ選択されているときは動作しない
    if (this.props.filterType.length < 2) {
      this.props.setFilterType(inputType);
    }
  };

  render() {
    const { classes, filterType } = this.props;

    return (
      <React.Fragment>
        <div className={classes.toggleContainer}>
          <Paper className={classes.paper} elevation={3}>
            <ToggleButtonGroup
              className={classes.toggleGroup}
              value={filterType}
              exclusive={true}
              onChange={this.handleClick}
            >
              {/* TODO: use ALL_TYPES */}
              <ToggleButton className={classes.toggleButton} value="Normal">
                ノーマル
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="Fire">
                ほのお
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="Water">
                みず
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="Electric">
                でんき
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="Grass">
                くさ
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="Ice">
                こおり
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="Fighting">
                かくとう
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="Poison">
                どく
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="Ground">
                じめん
              </ToggleButton>
              <br />>
              <ToggleButton className={classes.toggleButton} value="Flying">
                ひこう
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="Psychic">
                エスパー
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="Bug">
                むし
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="Rock">
                いわ
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="Ghost">
                ゴースト
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="Dragon">
                ドラゴン
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="Dark">
                あく
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="Steel">
                はがね
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="Fairy">
                フェアリー
              </ToggleButton>
            </ToggleButtonGroup>
          </Paper>
        </div>
      </React.Fragment>
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
)(withStyles(styles)(ToggleButtons));
