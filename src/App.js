import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/Nav'
import JobDetail from './components/JobDetail'
import React from "react";

import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";

class App extends React.Component {
  state = {
    job: {},
  };

  getJob = (job) => {
    this.setState({ job: job });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Route
          path="/"
          exact
          render={(props) => <Search {...props} getJob={this.getJob} />}
        />
        <Route
          path="/jobDetails/"
          render={(props) => <JobDetail {...props} job={this.state.job} />}
        />
      </div>
    );
  }
}

export default App;
