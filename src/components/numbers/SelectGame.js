import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectGame extends Component {
    constructor(props) {
        super(props);
        this.handleSelectGameClick = this.handleSelectGameClick.bind(this);
    }

    render() {
        return(
            <div className="container">
                <h3 className="hero-heading">What numbers would you like to track?</h3>
                <form id="submit-numbers-form" className="text-left" data-ng-submit="check(numbersForm)">
                    <div className="main-check-form">
                        <div className="radio-group">
                            <label><input type="radio"
                                          name="numbersForm.game"
                                          value="Mega Millions"
                                          onClick={this.handleSelectGameClick} />
                                <span className="label-body">Mega Millions</span></label>
                            <label><input type="radio"
                                          name="numbersForm.game"
                                          value="Powerball"
                                          onClick={this.handleSelectGameClick} />
                                <span className="label-body">Powerball</span></label>

                            <div className="sw-CheckNumbers">


                                <input type="text"
                                       id="game_date"
                                       name="game_date"
                                       placeholder="mm/dd/yyyy"
                                       data-format="MM/DD/YYYY"
                                       data-value="{{ numbersForm.gameDate }}" />
                            </div>
                            <button type="submit" className="button-primary">Check</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    handleSelectGameClick = event => {
        this.props.onClick(event.target.value);
    };
}

SelectGame.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default SelectGame;
