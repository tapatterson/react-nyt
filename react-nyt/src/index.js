//sets up the routes for the rest of the app, utilizes react-router to do this

const React = require('react');
const ReactDOM = require('react-dom');

//properties associated with routes
const Router = require('react-router').Router;

const routes = require('./config/routes');

ReactDOM.render(

	<Router routes={routes} />,
	document.getElementById('app')
)



