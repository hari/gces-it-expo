import React from 'react';

import DownloadItems from '../data/Download';

class Download extends React.Component {

  render() {
    return (
      <div id="about">
        <div className="container gces-col">
          <h1>Download</h1>
          <ul>
            {
              DownloadItems.map(item => (
                <li className="download">
                  <h3>{item.title}</h3>
                  {
                    item.description && <p>{item.description}</p>
                  }
                  <a target="_blank" className="btn btn-success" href={item.link}>Download</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Download;
