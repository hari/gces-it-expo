import React from 'react';

import './index.css';
import Slide from '../components/Slide';
import Events from '../data/Events';

class Landing extends React.Component {

  render() {
    return (
      <div>
        <div className="container main-background">
          <div className="row">
            <div className="col-md-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ padding: '32px 0' }}>
                <small className="title--event">7<sup>th</sup></small>
                <h1 className="title--gces">GCES</h1>
                <h2 className="title--expo">IT EXPO</h2>
                <p className="title--year">2018</p>
                <div style={{ color: '#fff' }}>
                  <p>
                    <span style={{ width: '50px', display: 'inline-block' }}>Date</span>: &nbsp; 25<sup>th</sup> and 26<sup>th</sup> February
                  </p>
                  <p>
                    <span style={{ width: '50px', display: 'inline-block' }}>Time</span>: &nbsp; 10 AM to 5 PM
                  </p>
                  <p>
                    <span style={{ width: '50px', display: 'inline-block' }}>Venue</span>: &nbsp; GCES
                  </p>
                </div>
                <blockquote className="blockquote">
                  <p className="mb-0">"Bridging gaps through technology."</p>
                </blockquote>
                <hr />
                <div>
                  <span style={{ color: '#f8f8f8', margin: '8px 0' }}>Have any queries or questions?</span> &nbsp; 
                  <a className="btn btn-success" href="mailto:expo@gces.edu.np?subject=About+IT+Expo">Contact</a>
                </div>
              </div>
            </div>
            <div className="col-md-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div id="events" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner slider">
                  <ol className="carousel-indicators">
                    {
                      Events.map((event, index) => <li key={index} data-target="#events" data-slide-to={index} className={index === 0 ? 'active' : ''}></li>)
                    }
                  </ol>
                  {
                    Events.map((event, index) => <Slide key={'event+' + index} active={index === 0} event={event} />)
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
