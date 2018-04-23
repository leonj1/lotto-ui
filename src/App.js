import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import HomePage from './HomePage';
import AddNumbers from './components/AddNumbers';
import Pending from './components/Pending';
import History from './components/History';
import Admin from './components/Admin';
import FeedbackSubmit from './components/FeedbackSubmit';
import Profile from './components/account/Profile';
import LoginForm from './components/security/LoginForm';
import RegisterForm from './components/security/RegisterForm';
import {registerAccount, loginAccount, logoff} from './redux/actions';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                first_name: "",
                last_name: "",
                email: "",
                token: "",
                is_admin: "",
                groups: [],
                data: {
                    numbers: []
                }
            },
            credentials: {
                email: "",
                password: ""
            },
            request: {
              status: "",
              reason: ""
          }
        };
        this.registerAccountHandler = this.registerAccountHandler.bind(this);
        this.loginHandler = this.loginHandler.bind(this);
        this.logoff = this.logoff.bind(this);
    }

    componentDidMount() {
        this.setState({user: localStorage.getItem("user")});
    }

    // onSetResult = (result, key) => {
    //     localStorage.setItem(key, JSON.stringify(result.hits));
    //     this.setState({hits: result.hits});
    // };

    showUserLinks() {
        if (this.state.user) {
            return (
                <div>
                    <NavItem eventKey={1} href="/add/">
                        <Link to="/add" className="NavBar-Item">Add Numbers</Link>
                    </NavItem>
                    <NavItem eventKey={2} href="/pending/">
                        <Link to="/pending" className="NavBar-Item">Pending</Link>
                    </NavItem>
                    <NavItem eventKey={3} href="/history/">
                        <Link to="history" className="NavBar-Item">History</Link>
                    </NavItem>
                    <NavItem eventKey={4} href="/feedback/">
                        <Link to="feedback" className="NavBar-Item">Feedback</Link>
                    </NavItem>
                    <NavItem eventKey={5} href="/admin/">
                        <Link to="admin" className="NavBar-Item">Admin</Link>
                    </NavItem>
                    <NavItem eventKey={6} href="/account/">
                        <Link to="account" className="NavBar-Item">Account</Link>
                    </NavItem>
                </div>
            )
        }
    }

    showLoggedOutLinks() {
        if (!this.state.user) {
            return (
                <div>
                    <NavItem eventKey={1} href="/login/">
                        <Link to="/login" className="NavBar-Item">Login</Link>
                    </NavItem>
                    <NavItem eventKey={1} href="/register/">
                        <Link to="/register" className="NavBar-Item">Register</Link>
                    </NavItem>
                </div>
            )
        }
    }

    render() {
        return (
            <Router>
                <div>
                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link to="/" className="App-logo">LottoCanary</Link>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Nav>
                            {this.showUserLinks()}
                            {this.showLoggedOutLinks()}
                        </Nav>
                    </Navbar>

                    <Route exact path="/" render={(props) => (
                        <HomePage token={this.props.token}
                                  onCreateSecret={this.registerAccountHandler}
                                  onInitialization={this.clearRequest}/> )}/>
                    <Route path="/add/" render={(props) => (
                        <AddNumbers request={this.props.request}
                                    contents={this.props.secret.message}
                                    onFetchToken={this.fetchSecret}/> )}/>
                    <Route path="/pending/" render={(props) => (
                        <Pending request={this.props.request}
                                 contents={this.props.secret.message}
                                 onFetchToken={this.fetchSecret}/> )}/>
                    <Route path="/history/" render={(props) => (
                        <History request={this.props.request}
                                 contents={this.props.secret.message}
                                 onFetchToken={this.fetchSecret}/> )}/>
                    <Route path="/admin/" render={(props) => (
                        <Admin request={this.props.request}
                               contents={this.props.secret.message}
                               onFetchToken={this.fetchSecret}/> )}/>
                    <Route path="/account/" render={(props) => (
                        <Profile request={this.props.request}
                                 contents={this.props.secret.message}
                                 onFetchToken={this.fetchSecret}/> )}/>
                    <Route path="/feedback/" render={(props) => (
                        <FeedbackSubmit request={this.props.request}
                                        contents={this.props.secret.message}
                                        onFetchToken={this.fetchSecret}/> )}/>
                    <Route path="/login/" render={(props) => (
                        <LoginForm request={this.props.request}
                                   contents={this.props.secret.message}
                                   onClickLogin={this.loginHandler} /> )}/>
                    <Route path="/register/" render={(props) => (
                        <RegisterForm request={this.props.request}
                                      contents={this.props.secret.message}
                                      onClickRegister={this.registerAccountHandler} /> )}/>
                </div>
            </Router>
        );
    }

    registerAccountHandler = account => {
        this.props.registerAccountProp(account);
    };

    loginHandler = account => {
        this.props.loginUserProp(account);
    };

    logoff = () => {
        this.props.logoffUser();
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
        registerAccountProp: function (account) {
            dispatch(registerAccount(account));
        },
        loginUserProp: function (account) {
            dispatch(loginAccount(account));
        },
        logoffUser: function () {
            dispatch(logoff());
        }
    }
};

const ReduxApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default ReduxApp;
