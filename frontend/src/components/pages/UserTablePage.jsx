import React, { Component } from 'react';
import config from '../../config'
import {UsersTable} from '../organisms/UsersTable'
import { Link } from 'react-router-dom'

class UsersTablePage extends Component {

  constructor(props) {
    super(props)
    this.state= {
      users: [],
      response: ''
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
  
  seedUsers = (seedOne) => {
    fetch(`${config.apiUrl}/seed/${seedOne}`)
      .then(response => {
        const promise = response.json()
        promise.then(value => {
          this.setState({response: value})
          this.updateUsers()
        })
      })
  }

  seedTen = () => {
    this.seedUsers('False')
  }

  seedOne = () => {
    this.seedUsers('True')
  }

  cleanTable = () => {
    fetch(`${config.apiUrl}/drop`)
      .then(response => {
        const promise = response.json()
        promise.then(value => {
          this.setState({response: value})
          this.updateUsers()
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="usersTableWrapper">
        <h2>{this.state.response}</h2>
          <div className="users-table-button-wrapper">
            <Link to={`/user/add`}><button type="button" className="btn btn-success add-button">Add</button></Link>
            <div className="users-table-seed-clean-buttons-wrapper">
              <button type="button" onClick={this.cleanTable} className="btn btn-success clean-button">Clean</button>
              <button type="button" onClick={this.seedTen} className="btn btn-success seed-button">Seed-10</button>
            </div>
          </div>
          <div className="usersTableContentWrapper">
            <UsersTable users={this.state.users} updateUsers={this.updateUsers}/>
          </div>      
        </div>      
      </div>
    );
  }
}

export default UsersTablePage;
