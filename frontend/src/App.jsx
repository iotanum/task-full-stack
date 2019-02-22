import React, { Component } from 'react';
import config from '../src/config'

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
          this.setState({users: value}, () => {
            console.log(this.state.users)
          })
        })
      })
  }
  
  render() {
    return (
      <div className="App">
        <button type="button" className="btn btn-primary">Primary</button>
      </div>
    );
  }
}

export default App;
