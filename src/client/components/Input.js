import React, { Component } from "react";

import { withStyles } from '@material-ui/core/styles';

import { Typography } from "@material-ui/core";


const styles = (theme) => ({
  main: {
    // backgroundColor: "red",
  },
  text: {
    textAlign: "center",
    margin: "30px",
    fontSize: "100px"
  },
  subtext: {
    textAlign: "center",
    fontSize: "50px"
  }
});

class Input extends Component {
  render() {
    const { classes,onChange, value, placeholder, title } = this.props;

    return (
      <div className={classes.main}>
      <Typography variant="title">
      {title}
      </Typography>
        <input
          value={value}
          placeholder={placeholder ||"Input"}
          onChange={onChange}
        />
      </div>)
  }
}

export default withStyles(styles)(Input);