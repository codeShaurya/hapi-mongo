import React, { Component } from "react";
import fetch from 'isomorphic-fetch';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { Button } from "@material-ui/core";

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import FormGroup from '@material-ui/core/FormGroup';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

import PermIdentity from '@material-ui/icons/PermIdentity';
import Email from '@material-ui/icons/Email';
import CloseIcon from '@material-ui/icons/Close'

const styles = (theme) => ({
  root: {
    paddingBottom: "20px",
    paddingTop: "10px",
  },
  card: {
    margin: "5px",
    backgroundColor: "#E1F5FE",
    borderRadius: "8px"
  },
  header: {
    textAlign: "center",
    padding: '10px 10px 10px 10px',
    fontFamily: "'Amaranth', sans-serif",
  },
  flex: {
    display: 'flex',
    justifyContent: "center",
    margin: "10px",
    alignItems: "flex-end",
  },
  alignbutton: {
    flex: "1 0 auto",
  },
  margin: {
    margin: theme.spacing.unit,
    width: '100%',
  },
  button: {
    boxShadow: "5px 5px 10px 1px",
    margin: "25px",
    [theme.breakpoints.down('md')]: {
      margin: "8px",
    }
  },
  icon: {
    fontSize: "40px",
    marginRight: "20px",
  },
  input: {
    fontSize: '20px',
    fontFamily: "'Amaranth', sans-serif",
    width: "100%",
    border: '2px solid #dadada',
    borderRadius: '8px',
    height: '130px',
  },
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

class Create extends Component {

  state = {
    name: "",
    email: "",
    username: "",
    github: "",
  }

  handleChange = (e, name) => {
    this.setState({[`${name}`]:e.target.value});
  }

  onSubmit = async () => {
    try {
      const url = `/api/create`;
      const { name, email, username, github } = this.state;
      /* 
      const res = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ name, email, username, github }),
      });
      console.log(res); */

      fetch(url, {
        method:"POST",
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ name, email, username, github }),
      })
        .then(e => e.json())
        .then(e => {
          const {statusCode} = e;
          if(statusCode !== 400){
            this.setState({ open: true });
          }
        })
        .catch(e => console.log(e));

    } catch (e) {
      console.error(e);
    }
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  onClick1 = (e) =>{
    e.preventDefault();
    window.location.href="/developers"
  }


  render() {

    const { classes } = this.props;
    const {name, email, username, github, open} = this.state;


    return (
      <div className={classes.root}>
        <Grid
          container
          justify="center"
          spacing={0}
          alignItems="center"
        >
          <Grid item xs={12} lg={5}>
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  variant="display3"
                  classes={{
                    root: classes.header
                  }}
                >
                  Submit Information
                </Typography>

                  <FormGroup>
                    <form noValidate autoComplete="false">
                      <div className={classes.flex}>
                        <PermIdentity className={classes.icon} />
                        <TextField
                          className={classes.margin}
                          required
                          label="Name"
                          onChange={e => this.handleChange(e, 'name')}
                          id="mui-theme-provider-input"
                        />
                      </div>
                      <div className={classes.flex}>
                        <Email className={classes.icon} />
                        <TextField type="email"
                          className={classes.margin}
                          required
                          onChange={e => this.handleChange(e, 'email')}
                          label="Email"
                          id="mui-theme-provider-input"
                        />
                      </div>
                      <div className={classes.flex}>
                        <PermIdentity className={classes.icon} />
                        <TextField
                          className={classes.margin}
                          required
                          label="Username"
                          onChange={e => this.handleChange(e, 'username')}
                          id="mui-theme-provider-input"
                        />
                      </div>
                      <div className={classes.flex}>
                        <PermIdentity className={classes.icon} />
                        <TextField
                          className={classes.margin}
                          required
                          label="Github"
                          onChange={e => this.handleChange(e, 'github')}
                          id="mui-theme-provider-input"
                        />
                      </div>
                      <br />
                      <div className={classes.alignbutton} />
                      <Button variant="raised" color="primary" onClick={this.onSubmit} >
                        Submit
                      </Button>
                    </form>
                  </FormGroup>
              </CardContent>
              <Button variant="raised" color="primary" onClick={e => this.onClick1(e)} >
                View Developers
              </Button>
            </Card>
          </Grid>
        </Grid>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Data is Saved</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
              Close
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>

    );
  }
}

export default withStyles(styles)(Create);