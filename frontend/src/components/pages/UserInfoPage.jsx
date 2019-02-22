import React, { Component } from 'react';

class UserInfoPage extends Component {

  constructor(props) {
    super(props)
    this.state= {
      user: []
    }
  }
  componentDidMount() {
      //fetch new data of user from query parameter
    // fetch(`${config.apiUrl}/users`)
    //   .then(response => {
    //     const promise = response.json()
    //     promise.then(value => {
    //       this.setState({users: value})
    //     })
    //   })
  }
  
  render() {
    return (
      <div className="contentWrapper">
        Hello
      </div>
    );
  }
}

export default UserInfoPage;
