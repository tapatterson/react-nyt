import React from 'react';
import Router from'react-router';

import helpers from '../../utils/helpers';

class Results extends React.Component {
	getInitialState() {
		return{

		}
	}
	handleClick(item, event) {
		console.log("clicked");


	}
	render() {
		if(!this.props.results.hasOwnProperty('docs')){
			return (
				<li className="list-group-item">
					<h3>
						<span className="text-center"><em>Enter search terms to begin...</em></span>
					</h3>
				</li>
			)
		}
		else{
			return(
				<div className="main-container">
					<div className="row">
						<div className="panel panel-primary">
							<div className="panel-heading">
								<h1 className="panel-title"> <strong> <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span> Results </strong>
								</h1>
							</div>
							<div className="panel-body">
								<ul className="list-group">
									{}
								</ul>
							</div>
						</div>
					</div>
				</div>
			)
		}
	}
};



