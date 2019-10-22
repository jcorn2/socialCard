import React from 'react';
import Header from './Header';
// eslint-disable-next-line import/no-unresolved
import OhWonder from '../assets/images/ohWonder.jpeg';
import './SocialCard.css';

// eslint-disable-next-line react/prefer-stateless-function
class SocialCard extends React.Component {
  render() {
    return (
      <div className="Social-Card">
        <Header name="James Cornelius" userName="BamBam" />
        <div className="Social-Card-Caption">
            <img src={OhWonder} alt="Oh Wonder" className="Social-Card-Caption-Image" />
        </div>
      </div>
    );
  }
}

export default SocialCard;
