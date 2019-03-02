import React from "react";
import { connect } from "react-redux";
import { setFilterType, deleteFromFilterType } from "../actions";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { translateFromEnglish } from "../utils";

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

    if (this.props.filterType.length < 2) {
      this.props.setFilterType(inputType);
    }
  };

  render() {
    const { classes, filterType, language } = this.props;

    return (
      <div className={classes.toggleContainer}>
        <Paper className={classes.paper} elevation={3}>
          <ToggleButtonGroup
            className={classes.toggleGroup}
            value={filterType}
            exclusive={true}
            onChange={this.handleClick}
          >
            {/* TODO: use ALL_TYPE from constants/index.js */}
            <ToggleButton className={classes.toggleButton} value="Normal">
              {translateFromEnglish(["Normal"], language)}
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Fire">
              {translateFromEnglish(["Fire"], language)}
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Water">
              {translateFromEnglish(["Water"], language)}
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Electric">
              {translateFromEnglish(["Electric"], language)}
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Grass">
              {translateFromEnglish(["Grass"], language)}
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Ice">
              {translateFromEnglish(["Ice"], language)}
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Fighting">
              {translateFromEnglish(["Fighting"], language)}
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Poison">
              {translateFromEnglish(["Poison"], language)}
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Ground">
              {translateFromEnglish(["Ground"], language)}
            </ToggleButton>
            <br />
            <ToggleButton className={classes.toggleButton} value="Flying">
              {translateFromEnglish(["Flying"], language)}
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Psychic">
              {translateFromEnglish(["Psychic"], language)}
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Bug">
              {translateFromEnglish(["Bug"], language)}
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Rock">
              {translateFromEnglish(["Rock"], language)}
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Ghost">
              {translateFromEnglish(["Ghost"], language)}
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Dragon">
              {translateFromEnglish(["Dragon"], language)}
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Dark">
              {translateFromEnglish(["Dark"], language)}
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Steel">
              {translateFromEnglish(["Steel"], language)}
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Fairy">
              {translateFromEnglish(["Fairy"], language)}
            </ToggleButton>
          </ToggleButtonGroup>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filterType: state.filterType,
    language: state.language
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
