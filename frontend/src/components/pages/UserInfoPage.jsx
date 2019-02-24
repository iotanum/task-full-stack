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
    var url_string = window.location.href
    var url = new URL(url_string)
    var id = url.searchParams.get("id")

    fetch(`${config.apiUrl}/user/${id}/info`)
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
          <UserForm user={this.state.user} submitButtonText='Update'></UserForm>
        </div>
      </div>
    );
  }
}

export default UserInfoPage;
