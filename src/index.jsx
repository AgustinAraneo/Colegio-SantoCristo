import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


let Index;
if (window.navigator.userAgent.match(/Mobile/)) {
  Index = require('./containers/mobile-index').default;
} else {
  Index = require('./containers/desktop-index').default;
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<Index />);