import React, { Component } from "react";

class Developers extends Component {

  componentWillMount = async () => {
    try {
      const url = `/api/developers`;
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
        {"all Developers"}
      </div>
    );
  }
}

export default Developers;