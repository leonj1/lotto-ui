import React, {Component} from 'react';
import SelectGame from "./numbers/SelectGame";
import TicketStub from "./tickets/TicketStub";

class AddNumbers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: ""
        };
        this.setGame = this.setGame.bind(this);
    }

    render() {
        return (
            <div>
                <SelectGame onClick={this.setGame}/>
                {this.state.game ? <TicketStub game={this.state.game} /> : null}
            </div>
        )
    }

    setGame = game => {
        this.setState({ game: game });
    }
}

export default AddNumbers;
