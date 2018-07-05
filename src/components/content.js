import React, _{ Component } from 'react';

class Content extends Component {
    render() {
        console.log(props);
        const data = this.props.data;
        return (
            <p>
                Ladies and gentlemen, this is <b>{data.color}</b> Barber, your host for today's show. On this very special episode of \"Who Let The <b>{data.pluralNoun}</b>\", we'll be seeing if our contestants can traverse through the <b>{data.adjOne}</b> Forest while being chased by none other than <b>{data.celebOne}</b>! Hold onto your beanbag chairs, because this ride is about to get wild!
            </p>
        )
    }
}

export default Content;