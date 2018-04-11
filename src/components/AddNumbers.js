import React, {Component} from 'react';

class AddNumbers extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <h3 className="hero-heading">What numbers would you like to track?</h3>
                <form id="submit-numbers-form" className="text-left" data-ng-submit="check(numbersForm)">
                    <div className="main-check-form">
                        <div className="radio-group">
                            <label><input type="radio"
                                          name="numbersForm.game"
                                          data-ng-model="numbersForm.game"
                                          data-value="Mega Millions"
                                          data-ng-click="openTicketInput('mega')" />
                                <span className="label-body">Mega Millions</span></label>
                            <label><input type="radio"
                                          name="numbersForm.game"
                                          data-ng-model="numbersForm.game"
                                          data-value="Powerball"
                                          data-ng-click="openTicketInput('powerball')" />
                                <span className="label-body">Powerball</span></label>

                            <div className="sw-CheckNumbers">


                                <input type="text"
                                       id="game_date"
                                       name="game_date"
                                       placeholder="mm/dd/yyyy"
                                       data-ng-model="numbersForm.gameDate"
                                       data-moment-picker="numbersForm.gameDate"
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
}

export default AddNumbers;
