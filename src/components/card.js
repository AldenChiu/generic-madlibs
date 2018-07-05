import React, { Component } from 'react';

import Input from './input';

class Card extends Component {

    constructor() {
        super()

        this.state = {
            color: 'GREEN',
            pluralNoun: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({ color: event.target.value })
    }

    render() {

        return (
            <div className="card">            
                <h1>{this.state.color}</h1>
                <input onChange={() => this.handleInputChange(event)}/>
            </div>
        )

        return (
            <div className="card">
                <h1>{this.state.color}</h1>
                { Input('Color') }
                { Input('Plural noun') }
            </div>
        )
    }
}

export default Card;