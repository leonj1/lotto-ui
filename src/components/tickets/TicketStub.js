import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MegaMillions from "./MegaMillions";
import PowerBall from "./PowerBall";

class TicketStub extends Component {

    showTicket() {
        if (this.props.game === 'Mega Millions') {
            return (
                <MegaMillions/>
            )
        } else if (this.props.game === 'Powerball') {
            return (
                <PowerBall/>
            )
        }
    }

    render() {
        return (
            <div>
                {this.showTicket()}
            </div>
        )
    }
}

TicketStub.PropTypes = {
    game: PropTypes.string
};

export default TicketStub;
