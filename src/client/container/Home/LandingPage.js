import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class LandingPage extends Component{

  onClick = (e, to) => {
    e.preventDefault();
    window.location.href=to;
  }

  render(){
    return(
      <div>
        <Button variant="contained" color="primary" onClick={e => this.onClick(e, "/create")}>
          Create
        </Button>
        <Button variant="contained" color="primary" onClick={e => this.onClick(e, "/developers")}>
          View Developers
        </Button>
      </div>
    );
  }
}

export default LandingPage;