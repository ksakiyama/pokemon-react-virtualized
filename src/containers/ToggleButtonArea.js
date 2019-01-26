import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import Paper from "@material-ui/core/Paper";

// import classNames from "classnames";
// import { css } from "@emotion/core";
// import { jsx, css } from '@emotion/core'
// import styled from 'styled-components';

const styles = theme => ({
  toggleContainer: {
    // height: 56,
    // padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
    // margin: `${theme.spacing.unit}px 0`,
    // background: theme.palette.background.default
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
    // color: "red" // test
    // width: 100
  }
});

class ToggleButtons extends React.Component {
  state = {
    alignment: []
  };

  handleAlignment = (event, alignment) => {
    console.log(alignment);
    this.setState({ alignment });
  };

  render() {
    const { classes } = this.props;
    const { alignment } = this.state;

    // const append = `{color: "#F00"}`;
    // const className = css({
    //   color: "red"
    //   // backgroundColor: "red"
    // });
    // const className = css`
    //   color: hotpink;
    // `;

    return (
      <React.Fragment>
        <div className={classes.toggleContainer}>
          <Paper className={classes.paper} elevation={3}>
            <ToggleButtonGroup
              className={classes.toggleGroup}
              value={alignment}
              exclusive={false}
              onChange={this.handleAlignment}
            >
              <ToggleButton className={classes.toggleButton} value="type00">
                <span style={{color: "red"}}>ノーマル</span>
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="type01">
                ほのお
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="type02">
                みず
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="type03">
                でんき
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="type04">
                くさ
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="type05">
                こおり
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="type06">
                かくとう
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="type07">
                どく
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="type08">
                じめん
              </ToggleButton>
            </ToggleButtonGroup>
          </Paper>
        </div>
        <div className={classes.toggleContainer}>
          <Paper className={classes.paper} elevation={3}>
            <ToggleButtonGroup
              className={classes.toggleGroup}
              value={alignment}
              exclusive={false}
              onChange={this.handleAlignment}
            >
              <ToggleButton className={classes.toggleButton} value="type09">
                ひこう
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="type10">
                エスパー
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="type11">
                むし
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="type12">
                いわ
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="type13">
                ゴースト
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="type14">
                ドラゴン
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="type15">
                あく
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="type16">
                はがね
              </ToggleButton>
              <ToggleButton className={classes.toggleButton} value="type17">
                フェアリー
              </ToggleButton>
            </ToggleButtonGroup>
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}

ToggleButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ToggleButtons);
