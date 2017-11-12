//sets up the routes for the rest of the app, utilizes react-router to do this

var React = require('react');
var ReactDOM = require('react-dom');

//properties associated with routes
var Router = require('react-router').Router;

var routes = require('./config/routes');

ReactDOM.render(

	<Router routes={routes} />,
	document.getElementById('app')
)


// import ReactDOM from 'react-dom';

import React from 'react';

// import registerServiceWorker from './registerServiceWorker';


// ReactDOM.render(<index />, document.getElementById('root'));
// registerServiceWorker();
