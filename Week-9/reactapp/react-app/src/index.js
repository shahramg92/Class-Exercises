import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import HelloMessage from './Hello';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();




// ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById('root'));
// registerServiceWorker();

// var h1 = document.createElement('h1');
// h1.innerHTML = 'Hello World';
