import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import About from './About';
import Landing from './Landing';

class Home extends React.Component {

  render() {
    return (
        <BrowserRouter>
          <div>
            <Route path="/about" component={About} />
            <Route exact path="/" component={Landing} />
            <p style={{ padding: '16px', color: '#abc', fontSize: '18px', textAlign: 'center' }}>Powered by: <span style={{ color: '#fff' }}>Codse</span></p>
          </div>
        </BrowserRouter>
      );
    }
  }

  export default Home;
