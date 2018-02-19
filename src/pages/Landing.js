import React from 'react';
import { Level, Section } from 'reactbulma';
import Slider from 'react-slick';

import './index.css';
import Slide from '../components/Slide';
import Events from '../data/Events';
import Header from '../components/Header';

const sliderSetting = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

class Landing extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div className="container main-background">
          <div className="row">
            <div className="col-md-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ padding: '32px 0' }}>
                <small className="title--event">7<sup>th</sup></small>
                <h1 className="title--gces">GCES</h1>
                <h2 className="title--expo">IT EXPO</h2>
                <p className="title--year">2018</p>
                <blockquote className="blockquote">
                  <p className="mb-0">"Bridging gaps through technology."</p>
                </blockquote>
              </div>
            </div>
            <div className="col-md-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div id="events" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner slider">
                  <ol className="carousel-indicators">
                    {
                      Events.map((event, index) => <li key={index} data-target="#events" data-slide-to={index} className={index == 0 ? 'active' : ''}></li>)
                    }
                  </ol>
                  {
                    Events.map((event, index) => <Slide key={'event+' + index} active={index == 0} event={event} />)
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
