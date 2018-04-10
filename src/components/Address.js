import React from 'react';
import PropTypes from 'prop-types';

const Address = (props) => (
  <div>
    <p>{props.address.line1}</p>
    <p>{props.address.town}</p>
    <p>{props.address.county}</p>
    <p>{props.address.country}</p>
  </div>
);

Address.propTypes = {
  address: PropTypes.shape({
    line1: PropTypes.string.isRequired,
    town: PropTypes.string.isRequired,
    county: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired
};

export default Address;
