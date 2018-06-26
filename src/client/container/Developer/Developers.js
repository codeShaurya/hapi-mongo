import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';

import Developer from './index';
class Developers extends Component {

  state = {
    developers:[]
  }

  componentWillMount = async () => {
    try {
      const url = `/api/developers`;
      /* const res = await fetch(url, {
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      });
      const ans = await res;
      console.log(ans); */

      fetch(url, {
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      })
        .then(e => e.json())
        .then(e => {
          this.setState({developers:e});
        })
        .catch(e => console.log(e));


    } catch (e) {
      console.error(e);
    }
  }


  render() {

    const {developers} = this.state;

    console.log(developers);

    return (
      <div>
        <Grid container spacing={8}>
        {
          developers.map((dev, i) => (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={i}>
              <Developer developer={dev} />
            </Grid>
          ))
        }
        </Grid>
      </div>
    );
  }
}

export default Developers;