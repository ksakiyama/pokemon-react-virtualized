import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

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
  state = {
    value: "japanese"
  };

  handleChange = () => {};

  render() {
    const { classes } = this.props;
    return (
      <div>
        <FormControl component="fieldset" className={classes.formControl}>
          {/* <FormLabel component="legend">Language</FormLabel> */}
          <RadioGroup
            aria-label="Language"
            name="language"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <div className={classes.root}>
              <FormControlLabel
                value="english"
                control={<Radio />}
                label="English"
              />
              <FormControlLabel
                value="japanese"
                control={<Radio />}
                label="日本語"
              />
              <FormControlLabel
                value="chinese"
                control={<Radio />}
                label="中文"
              />
            </div>
          </RadioGroup>
        </FormControl>
      </div>
    );
  }

  render_() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Radio
          checked={this.state.selectedValue === "a"}
          onChange={this.handleChange}
          value="a"
          name="radio-button-demo"
          aria-label="AAAAAA"
        >
          aaa
        </Radio>
        <Radio
          checked={this.state.selectedValue === "b"}
          onChange={this.handleChange}
          value="b"
          name="radio-button-demo"
          aria-label="B"
        />
        <Radio
          checked={this.state.selectedValue === "c"}
          onChange={this.handleChange}
          value="c"
          name="radio-button-demo"
          aria-label="C"
          classes={{
            root: classes.root,
            checked: classes.checked
          }}
        />
      </div>
    );
  }
}

export default withStyles(styles)(LanguageSelectArea);
