import React, { Component } from 'react';
import UsersTablePage from './components/pages/UserTablePage'
import UserInfoPage from './components/pages/UserInfoPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="homepageTitleWrapper">
            <h1 className="homepageTitle"> task-full-stack </h1>
          </div>
          <div className="content">
            <Route exact path="/" component={UsersTablePage}/>
            <Route exact path="/user" component={UserInfoPage}/>
          </div>  
        </div>
      </Router>
    );
  }
}

export default App;
