import React, { Component } from 'react';

import Input from './input';

class Card extends Component {
    render() {
        return (
            <div className="card">
                { Input('Pancaeks') }
            </div>
        )
    }
}

export default Card;