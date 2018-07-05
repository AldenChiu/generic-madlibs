import React, { Component } from 'react';

import Input from './input';
import Content from './content';

class Card extends Component {

    constructor() {
        super()

        this.state = {
            color: '',
            pluralNoun: '',
            adjOne: '',
            celebOne: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({ color: event.target.value })
    }

    render() {
        

        const inputData = [
            {title: 'Color', this.state.color, name: 'color'},
            {title: 'Plural Noun', this.state.pluralNoun, name: 'pluralNoun'},
            {title: 'Adjective', this.state.adjOne, name: 'adjOne'},
            {title: 'Celebrity', this.state.celebOne, name: 'celebOne'},
        ]

        return (
            <div className="card">
                {
                    inputData.map(data => Input((data), this.handleInputChange))
                }
                <Content data={this.state}/>
            </div>
        )
    }
}

export default Card;