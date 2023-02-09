import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let Index;
if (window.navigator.userAgent.match(/Mobile/)) {
  Index = require('./containers/mobile-index').default;
} else {
  Index = require('./containers/desktop-index').default;
}

ReactDOM.render(<Index />, document.getElementById('root'));