import React, { Component } from 'react';

import Input from './input';
import Content from './content';

const INITIAL_STATE = {
    color: '',
    pluralNoun: '',
    adjOne: '',
    celebOne: '',
    contentVisible: false
}

class Card extends Component {

    constructor() {
        super()

        this.state = INITIAL_STATE

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({ color: event.target.value })
    }

    handleFormSubmit() {
        event.preventDefault()

        if(this.state.contentVisible) {
            this.setState(INITIAL_STATE)
        } else {
            this.setState({ contentVisible: true })
        }

        this.setState({ contentVisible: !this.state.contentVisible })
    }

    render() {
        

        const inputData = [
            {title: 'Color', state: this.state.color, name: 'color'},
            {title: 'Plural Noun', state: this.state.pluralNoun, name: 'pluralNoun'},
            {title: 'Adjective', state: this.state.adjOne, name: 'adjOne'},
            {title: 'Celebrity', state: this.state.celebOne, name: 'celebOne'},
        ]

        return (
            <form onSubmit={this.handleFormSubmit} className="card">
                <div className="card__inputs">
                {
                    inputData.map((data, index) => {
                        Input( (data), this.handleInputChange, index)
                    })
                }
                </div>
                <button className={`card__${!this.state.contentVisible ? 'generate' : 'clear'}`} type="submit">{!this.state.contentVisible ? 'Generate MadLib' : 'Clear Form'}</button>
                {
                    this.state.contentVisible ? <Content data={this.state}/> : ''
                }
            </form>
        )
    }
}

export default Card;
