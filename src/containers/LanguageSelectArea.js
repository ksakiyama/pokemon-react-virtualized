import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";
import { connect } from "react-redux";
import { changeLanguage } from "../actions";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row"
  },
  formControl: {
    marginTop: 12,
    marginLeft: 16
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  }
});

class LanguageSelectArea extends React.Component {
  handleChange = event => {
    this.props.changeLanguage(event.target.value);
  };

  render() {
    const { classes, language } = this.props;
    console.log("this.prop.language = ", language);
    return (
      <div>
        <FormControl component="fieldset" className={classes.formControl}>
          {/* <FormLabel component="legend">Language</FormLabel> */}
          <RadioGroup
            aria-label="Language"
            name="language"
            value={language}
            onChange={this.handleChange}
            className={classes.root}
          >
            <FormControlLabel
              value="english"
              control={<Radio />}
              label="English"
            />
            <FormControlLabel
              value="chinese"
              control={<Radio />}
              label="中文"
            />
            <FormControlLabel
              value="japanese"
              control={<Radio />}
              label="日本語"
            />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    language: state.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeLanguage: language => {
      dispatch(changeLanguage(language));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(LanguageSelectArea));
