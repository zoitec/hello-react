import React from 'react';
import Chance from 'chance';

class Detail extends React.Component {
    constructor (props) {
        super(props);
        const people = [];

        for (let i = 0; i < 10; i++) {
            people.push({
                name: chance.first(),
                country: chance.country({ full: true })
            });
        }
        this.state = { people };
    }
    buttonClicked() {
        /*console.log('Button was clicked!')
        this.forceUpdate();  Only use this is React doesn't spot a very deep state change*/
        const newState = {
            name: chance.first()
        };
        this.setState(newState);
    }

    render() {
        /*return <p>This is React rendering HTML!</p>;
        return <p>{this.props.message}</p>;
        <button onClick={this.buttonClicked}>Meet Someone New</button>
        ======
        <p>Hello, {this.state.name}!</p>
                <p>You're from {this.state.country}.</p>
                <button onClick={this.buttonClicked.bind(this)}>Meet Someone New</button>
        */

        return (<div>
                {this.state.people.map((person, index) => (
                    <p key={index}>Hello, {person.name} from {person.country}!</p>

                ))}
        </div>);
    }
}

export default Detail;