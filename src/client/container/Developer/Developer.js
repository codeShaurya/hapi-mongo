import React, { Component } from "react";
import { withRouter } from 'react-router';
  
class Developer extends Component {

  componentWillMount = async () => {
    try {
      const username = this.props.match.params.username;
      console.log(username);
      const url = `/api/developer/${username}`;
      const res = await fetch(url, {
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      });

      console.log(res);

      // fetch(url, {
      //   mode: 'cors',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //     'Access-Control-Allow-Origin': '*'
      //   },
      // })
      //   .then(e => console.log(e))
      //   .catch(e => console.log(e));


    } catch (e) {
      console.error(e);
    }
  }

  render() {

    return (
      <div>
        {" Developer"}
      </div>
    );
  }
}

export default  withRouter(Developer);