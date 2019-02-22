import React, { Component } from 'react';
import config from '../src/config'
import {UsersTable} from './components/organisms/UsersTable'

class App extends Component {

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
      <div className="homepageTitleWrapper">
      <h1 className="homepageTitle"> task-full-stack </h1>
      </div>
      <div className="usersTableWrapper">
      <div className="usersTableContentWrapper">
        <UsersTable users={this.state.users}/>
      </div>      
      </div>      
      
      </div>
    );
  }
}

export default App;
