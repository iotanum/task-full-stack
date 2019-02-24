import React, { Component } from 'react';
import { UserForm } from '../organisms/UserForm'

class UserAddPage extends Component {

  constructor(props) {
    super(props)
    this.state= {}
  }


  
  render() {
    return (
      <div className="contentWrapper">
        <div className="user-form-wrapper">
          <UserForm submitButtonText='Add'/>
        </div>
      </div>
    );
  }
}

export default UserAddPage;
