import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from '../components/Header';
import About from './About';
import Landing from './Landing';
import Download from './Download';

class Home extends React.Component {

  render() {
    return (
        <BrowserRouter>
            <section>
                <Header/>
                <Route path="/about" component={About}/>
                <Route path="/downloads" component={Download}/>
                <Route exact path="/" component={Landing}/>
                <footer>
                    <p><em>Powered by: Codse</em></p>
                </footer>
            </section>
        </BrowserRouter>
      );
    }
  }

  export default Home;
