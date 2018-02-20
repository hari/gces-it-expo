import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Header from '../components/Header';
import About from './About';
import Landing from './Landing';
import Download from './Download';

class Home extends React.Component {

  render() {
    return (
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/about" component={About} />
            <Route path="/downloads" component={Download} />
            <Route exact path="/" component={Landing} />
            <p style={{ padding: '16px', color: '#abc', fontSize: '18px', textAlign: 'center' }}>Powered by: <span style={{ color: '#fff' }}>Codse</span></p>
          </div>
        </BrowserRouter>
      );
    }
  }

  export default Home;
