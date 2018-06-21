import React, { Component } from "react";
import Input from '../../components/Input'

class Create extends Component {
  render() {

    return (
      <div>
        <Input title={"name"}/>
        <Input title={"email"}/>
        <Input title={"username"}/>
      </div>
    );
  }
}

export default Create;