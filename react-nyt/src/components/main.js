import React from 'react';
import Search from './search.js';
import Router from 'react-router';
import ReactDOM from 'react-dom';

//create the main component - createClass is a function within React so you need React before createClass
class Main extends React.Component {
	//every component has to have a render function
	render() {
		return (
			<div className="main-container">
				<div className="jumbotron">
					<h1 className="text-center"> NYT Article Search </h1>
					<p className="lead text-center"> New York Times save and comment on articles. </p> 
				</div>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		)
	}
};

ReactDOM.render(

	<Main/>,
	document.getElementById('app')
)
