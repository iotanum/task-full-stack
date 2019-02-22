import React, { Component } from 'react';
import config from '../../config'
import {UsersTable} from '../organisms/UsersTable'

class UsersTablePage extends Component {

  constructor(props) {
    super(props)
    this.state= {
      users: []
    }
  }
  componentDidMount() {
    fetch(`${config.apiUrl}/users`)
      .then(response => {
        const promise = response.json()
        promise.then(value => {
          this.setState({users: value})
        })
      })
  }
  
  render() {
    return (
      <div className="App">
        <div className="usersTableWrapper">
          <div className="usersTableContentWrapper">
            <UsersTable users={this.state.users}/>
          </div>      
        </div>      
      
      </div>
    );
  }
}

export default UsersTablePage;
