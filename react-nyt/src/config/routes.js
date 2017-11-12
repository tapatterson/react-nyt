//include react and the router
const React = require('react');

//reference the components - you don't need the file extension because jsx automatically renders it
const Main = require('../components/main');
const Saved = require('../components/saved');
const Search = require('../components/search');

//to pull the router
const Router = require('react-router');
const Route = Router.Route;

//include the index route to catch all - a dynamic index that is the default route incase no other routes are hit
const IndexRoute = Router.IndexRoute;



//export the routes
module.exports = (
  <Route path="/" component={Main}>
{/*if the user selects search or save, show the appropriate component */}
    <Route path="/search" component={Search} />
    <Route path="/saved" component={Saved} />
{/*if the user selects any other path .. it takes them home */}
    <IndexRoute component={Search} />
  </Route>
);