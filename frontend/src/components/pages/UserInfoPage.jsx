import React, { Component } from 'react';
import config from '../../config'
import { UserForm } from '../organisms/UserForm'

class UserInfoPage extends Component {

  constructor(props) {
    super(props)
    this.state= {
      user: [],
    }
  }

  componentDidMount() {
    fetch(`${config.apiUrl}/user/${this.props.match.params.id}/view`)
      .then(response => {
        const promise = response.json()
        promise.then(value => {
          this.setState({ user: value })
        })
      })
  }
  
  render() {
    return (
      <div className="contentWrapper">
        <div className="user-form-wrapper">
          <UserForm user={this.state.user}></UserForm>
        </div>
      </div>
    );
  }
}

export default UserInfoPage;
