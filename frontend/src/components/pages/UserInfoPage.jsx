import React, { Component } from 'react';
import config from '../../config'

class UserInfoPage extends Component {

  constructor(props) {
    super(props)
    this.state= {
      user: [],
    }
  }

  componentDidMount() {
    console.log(this.props)
    fetch(`${config.apiUrl}/user/${this.props.match.params.id}/view`)
      .then(response => {
        const promise = response.json()
        promise.then(value => {
          console.log(value)
          this.setState({ user: value })
        })
      })
  }
  
  render() {
    return (
      <div className="contentWrapper">
        <h2>{JSON.stringify(this.state.user)}</h2>
      </div>
    );
  }
}

export default UserInfoPage;
