import React, { Component } from 'react';
import ContactList from './ContactList';

class ContactListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      error: null
    };
  }

  componentDidMount() {
    const timerId = setTimeout(() => {
      this.setState({error: 'Request timed out'});
    }, 2000);

    function always() {
      clearTimeout(timerId);
    }

    this.setState({ error: 'Loading...' });

    fetch('http://localhost:8060/api/contacts-delay')
      .then(response => response.json())
      .then(json => this.setState({contacts: json, error: null}))
      .catch(ex => this.setState({ error: ex.message }))
      .then(always, always);
  }

  render() {
    return (
      <div>
        <p>{ this.state.error ? this.state.error : null }</p>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default ContactListContainer;
