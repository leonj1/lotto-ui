import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import CreateSecret from './CreateSecret';
import GetSecret from './GetSecret';
import { submitSecret, fetchSecret, clearPastRequest } from './redux/actions';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
	super(props);
	this.createSecretHandler = this.createSecretHandler.bind(this);
	this.fetchSecret = this.fetchSecret.bind(this);
	this.clearRequest = this.clearRequest.bind(this);
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/" className="App-logo">NotePlum</Link>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="/">
                  <Link to="/" className="NavBar-Item">Create Secret</Link>
              </NavItem>
              <NavItem eventKey={2} href="/get/">
                  <Link to="get" className="NavBar-Item">Get Secret</Link>
              </NavItem>
            </Nav>
          </Navbar>

          <Route exact path="/" render={(props) => ( <CreateSecret token={this.props.token} onCreateSecret={this.createSecretHandler} onInitialization={this.clearRequest}/> )}/>
          <Route path="/get/" render={(props) => (<GetSecret request={this.props.request} contents={this.props.secret.message} onFetchToken={this.fetchSecret}/> )}/>
        </div>
      </Router>
    );
  }

  createSecretHandler = secret => {
  	this.props.createSecretProp(secret);
  };

  fetchSecret = token => {
  	this.props.fetchSecretProp(token);
  };

  clearRequest = () => {
      this.props.clearPastRequest();
  }
}

const mapStateToProps = state => {
	return {
		secret: state.secret,
		token: state.token,
        request: state.request
	}
};

const mapDispatchToProps = dispatch => {
	return {
		createSecretProp: function(secret) {
			dispatch(submitSecret(secret));
		},
		fetchSecretProp: function(token) {
			dispatch(fetchSecret(token));
		},
        clearPastRequest: function() {
		    dispatch(clearPastRequest());
        }
	}
};

const ReduxApp = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default ReduxApp;

