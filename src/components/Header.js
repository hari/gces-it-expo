import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
      <header>
        <div style={{ maxWidth: '250px', margin: '0 auto', textAlign: 'center' }}>
          <Link to='/about'>About</Link>
          <Link to="/">
            <img src={require('../resources/itexpo_logo.png')} alt="IT Expo" style={{height: '48px'}} />
          </Link>
          <Link to='/downloads'>Downloads</Link>
        </div>
      </header>
    );
  }
}

export default Header;
