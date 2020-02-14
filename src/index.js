import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/header.css';

import './style/people.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
