import React from 'react';
import { Level } from 'reactbulma';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
      <header>
        <div style={{ maxWidth: '200px', margin: '0 auto' }}>
          <Level mobile>
            <Level.Left>
              <Link to='/about'>About</Link>
            </Level.Left>
            <Level.Item hasTextCentered>
              <Link to="/">
                <img src={require('../resources/itexpo_logo.png')} alt="IT Expo" style={{height: '48px'}} />
              </Link>
            </Level.Item>
            <Level.Right>
              <a href='mailto:expo@gces.edu.np?subject=About+IT+Expo'>Contact</a>
            </Level.Right>
          </Level>
        </div>
      </header>
    );
  }
}

export default Header;
