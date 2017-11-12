var React = require('react');
var Router = require('react-router');

class Query extends React.Component {
	mixins: [Router.History]
	getInitialState() {
		return{
			'term': "",
			'start': "",
			'end': ""
		}
	}

	handleChange(event) {
		var newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	}
	handleSubmit(){

		this.props.updateSearch(this.state.term, this.state.start, this.state.end);
		return false;
	}
	render(){
		return(
			<div className="main-container">
				<div className="row">
				<div className="col-lg-12">
				<div className="panel panel-primary">
			  		<div className="panel-heading">
			    		<h1 className="lead">
			    			<span class="glyphicon glyphicon-search"></span>  Search Query
			    		</h1>
			  		</div>
			  		<div className="panel-body">
						<form>
							<div className="form-group">
								<label for="term">  <h4 className="">Keyword: </h4></label>
								<input type="text" value={this.state.value} className="form-control" id="term" onChange={this.handleChange} required />
							</div>
							<div className="form-group">
								<label for="start"> <h4> Start Year: </h4></label>
								<input type="number" value={this.state.value} className="form-control" id="start" onChange={this.handleChange} required />
							</div>
							<div className="form-group">
								<label for="end"><h4 className=""> End Year: </h4> </label>
								<input type="text" value={this.state.value} className="form-control" id="end" onChange={this.handleChange} required />
							</div>
							<button type="button" className="btn btn-default" onClick={this.handleSubmit}> <h4> <span class="glyphicon glyphicon-search"></span>  Search </h4>
							</button>
						</form>
				  	</div>
				</div>
				</div>
				</div>
			</div>
		)
	}
};

module.exports = Query;