import React, { Component } from "react";
import { Button } from "@material-ui/core";
import fetch from 'isomorphic-fetch';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import { withStyles } from '@material-ui/core/styles';
import Input from '../../components/Input'

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  input: {
    margin:"10px",
    padding:"10px",
  }
});

class Create extends Component {

  state ={
    name:"",
    email:"",
    value:"",
  }

  onChange =(name,e) => {
    this.setState({[`${name}`]:e.target.value});
  }

  onSubmit = async () => {
    try {
      const url = `/api/create`;
      const { name, email, username } = this.state;
      
      const res = await fetch(url, {
              method: 'POST',
              mode: 'cors',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              },
              body: JSON.stringify({ name, email, username }),
            });
      console.log(res);

      // fetch(url, {
      //   method:"POST",
      //   mode: 'cors',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //     'Access-Control-Allow-Origin': '*'
      //   },
      //   body: JSON.stringify({ name, email, username }),
      // })
      //   .then(e => console.log(e))
      //   .catch(e => console.log(e));


    } catch (e) {
      console.error(e);
    }
  }

  
  render() {

    const { classes } = this.props;
    const {name, email, username} = this.state;

    return (
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} lg={6} xl={6} md={6}>
            <Card className={classes.card}>
              <CardContent>
                <Input
                  value={name}
                  className={classes.input}
                  onChange={e => this.onChange('name',e)}
                  title={"name"} 
                />
                <Input
                  value={email}
                  className={classes.input}
                  onChange={e => this.onChange('email', e)}
                  title={"email"} 
                  />
                <Input
                  value={username}
                  className={classes.input}
                  onChange={e => this.onChange('username', e)}
                  title={"username"} 
                />
              </CardContent>
              <CardActions>
                <Button onClick={this.onSubmit}>Submit</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Create);