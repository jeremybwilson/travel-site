import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Router from './components/Router';

import '../styles/styles.css';
import './vendor.js';

// console.log(`.:: DEBUG ::. Just before the render`);
const reactRoot = document.querySelector('#react-root');
// console.log(`.:: DEBUG ::. document.querySelector('#react-root') is: `, reactRoot);

if(reactRoot !== undefined) {
  console.log(`.:: DEBUG ::. rendering React components.`);
  render(<Router />, reactRoot);
} else {
  console.log(`.:: DEBUG ::. React root element not found`);
}
