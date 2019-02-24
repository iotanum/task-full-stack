import React, { Component } from 'react';
import config from '../../config'
import {UsersTable} from '../organisms/UsersTable'
import { Link } from 'react-router-dom'

class UsersTablePage extends Component {

  constructor(props) {
    super(props)
    this.state= {
      users: []
    }
  }
  componentDidMount() {
    this.updateUsers()
  }

  updateUsers = () => {
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
          <Link to={`/user/add`}><button type="button" className="btn btn-info add-button">Add</button></Link>
          <div className="usersTableContentWrapper">
            <UsersTable users={this.state.users} updateUsers={this.updateUsers}/>
          </div>      
        </div>      
      </div>
    );
  }
}

export default UsersTablePage;
