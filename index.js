import React from 'react';
import Root from './Root';
import HashHistory from 'react-router/lib/HashHistory';
import BrowserHistory from 'react-router/lib/BrowserHistory';

// Use hash location for Github Pages but switch to HTML5 history locally.
const history = process.env.NODE_ENV === 'production' ? new HashHistory() : new BrowserHistory()

React.render(<Root history={history}/>,  document.getElementById('root'));