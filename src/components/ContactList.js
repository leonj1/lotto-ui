import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';

class ContactList extends Component {
  render() {
    const contacts = this.props.contacts || [];
    const contactComponents = contacts.map(contact => (
      <Contact
        {...contact}
        key={contact.id}
      />
    ));
    return (
      <div>
        { contactComponents }
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.object,
      email: PropTypes.string,
    })
  ),
};

export default ContactList;
