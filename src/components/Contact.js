import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Address from './Address';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { isExpanded: true };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    let expandedComponents = this.state.isExpanded ? (
        <div>
          <p>{this.props.email}</p>
          <Address address={this.props.address} />
        </div>
      ) : null;
    return (
      <div>
        <p onClick={this.handleClick}>{this.props.name}</p>
        { expandedComponents }
      </div>
    );
  }

  handleClick(e) {
    this.setState({ isExpanded: !this.state.isExpanded });
    this.props.handleExpanded && this.props.handleExpanded(this.props.name, !this.state.isExpanded);
  }
}

Contact.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.object,
  handleExpanded: PropTypes.func,
};

export default Contact;
