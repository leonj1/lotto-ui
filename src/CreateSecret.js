import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class CreateSecret extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: "",
			expiryMinutes: 60,
			password: ""
		};
		this.handleMessageChange = this.handleMessageChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleExpiryChange = this.handleExpiryChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

    componentWillMount() {
        this.props.onInitialization();
    }

	renderPasswordPrompt(){
	    // disabling until GetSecret supports prompting user
	    if(true === false) {
	        return (
                <div>
                    <label>Password to unlock </label>
                    <input value={ this.state.password } onChange={ this.handlePasswordChange } type="password" placeholder="Optional" />
                </div>
            )
        }
    }

	renderGeneratedToken() {
        if (this.props.token) {
            return (
                <div className="CreateSecret_TokenGenerated-Message">
                    <div>
                        <p>This token is what you hand out for someone to reclaim on this site.</p>
                    </div>
                    <div className="CreateSecret-Token">
                        { this.props.token }
                    </div>
                    <div>
                        <CopyToClipboard text={this.props.token} onCopy={this.onCopy} className="CreateSecret-CopyToClipBoard_Button">
                            <button>Copy to clipboard</button>
                        </CopyToClipboard>
                    </div>
                </div>
            )
        }
    }

    renderUsage() {
        if (!this.props.token) {
            return (
                <div className="CreateSecret_Usage-Message">
                    <p>Like Mission Impossible, this message self-destructs in the time you specify.</p>
                    <p>It can only ever be viewed once!</p>
                </div>
            )
        }
    }

	render() {
		return (
			<div className="container">
                <form>
                  <FormGroup
                    controlId="formBasicText"
                  >
                    <ControlLabel>Below text will be temporarily saved as a secret. Just enter text, then click Generate</ControlLabel>
                    <FormControl
                      style={{height: '150px'}}
                      componentClass="textarea"
                      height="100"
                      value={this.state.message}
                      placeholder="Enter text"
                      onChange={this.handleMessageChange}
                    />
                  </FormGroup>
                </form>
                {this.renderPasswordPrompt()}
				<div>
					<label>Expiry (mins) </label>
					<input value={ this.state.expiryMinutes } onChange={ this.handleExpiryChange } type="number" />
				</div>
				<div>
					<input onClick={ this.handleSubmit } type="submit" value="Generate Secret Token" className="CreateSecret-Button"/>
				</div>
                {this.renderGeneratedToken()}
                {this.renderUsage()}
			</div>
		)
	}

    handleMessageChange = event => {
		this.setState({ message: event.target.value });
    };

    handleExpiryChange = event => {
		this.setState({ expiryMinutes: event.target.value });
    };

	handlePasswordChange = event => {
		this.setState({ password: event.target.value });
	};

	handleSubmit = function(e) {
	    this.props.onCreateSecret && this.props.onCreateSecret(this.state);
        e.preventDefault();
	}
}

CreateSecret.propTypes = {
	onCreateSecret: PropTypes.func.isRequired,
    onInitialization: PropTypes.func.isRequired
};

export default CreateSecret;

