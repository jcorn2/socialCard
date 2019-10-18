import React from 'react';
import Header from './Header';
import './SocialCard.css';

class SocialCard extends React.Component {
    render() {
        return (
            <div className="Social-Card">
                <Header name="James Cornelius" userName="BamBam" />
            </div>
        )
    }
}

export default SocialCard;