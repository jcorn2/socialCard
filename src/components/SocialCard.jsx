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
        <div className="Social-Card-Content">
          <img src={OhWonder} alt="Oh Wonder" className="Social-Card-Content-Image" />
        </div>
        <div className="Social-Card-Caption">
          <h4 className="Social-Card-Caption-Title">Hallelujah by Oh Wonder</h4>
          <p className="Social-Card-Caption-Text">This is a great song. It really inspires me to practice my web development skills. I also really like better now by them as well.</p>
          <p className="Social-Card-Caption-Nickname">dev.to</p>
        </div>
      </div>
    );
  }
}

export default SocialCard;
