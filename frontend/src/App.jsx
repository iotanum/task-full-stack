import React, { Component } from 'react';
import UsersTablePage from './components/pages/UserTablePage'
import UserInfoPage from './components/pages/UserInfoPage'
import UserAddPage from './components/pages/UserAddPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="home-page-title-wrapper">
            <h1 className="home-page-title"> task-full-stack </h1>
          </div>
          <div className="content">
            <Route exact path="/" component={UsersTablePage}/>
            <Route exact path="/user/edit" component={UserInfoPage}/>
            <Route exact path="/user/add" component={UserAddPage}/>
          </div>  
        </div>
      </Router>
    );
  }
}

export default App;
