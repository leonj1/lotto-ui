import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TweetBox extends Component {

constructor() {
  super();
  this.maxCharacters = 140;
  this.state = { text: '' };
  this.handleChange = this.handleChange.bind(this);
  this.handleSend = this.handleSend.bind(this);
}

handleChange(e) {
  if (e.target.value.length > this.maxCharacters) {
    return;
  }
  this.setState({ text: e.target.value });
}

handleSend() {
  this.props.onSend(this.state.text)
}

render() {
  return (
    <div>
      <textarea value={this.state.text} onChange={this.handleChange} />
      <p>{this.maxCharacters - this.state.text.length} characters remaining</p>
      <button onClick={this.handleSend}>Send</button>
    </div>
  );
}
}

TweetBox.propTypes = {
  onSend: PropTypes.func.isRequired
};

export default TweetBox;
