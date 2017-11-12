const React = require('react');
const Router = require('react-router');

const Query = require('./Search/Query');
const Results = require('./Search/Results');

const helpers = require('../utils/helpers');

class Search extends React.Component {
  getInitialState() {
    return {
      term: "",
      start: "",
      end: "",
      results: {}
    }
  }
  componentDidUpdate(prevProps, prevState){
    console.log("COMPONENT UPDATED");
    console.log(this.state.term);
    console.log(this.state.start);
    console.log(this.state.end);

    console.log("Previous State ", prevState);
  }
  setQuery(newQuery, newStart, newEnd){
    this.setState({
      term: newQuery,
      start: newStart,
      end: newEnd
    })
  }

  render(){
    return(
      <div className="main-container">
        <Query updateSearch={this.setQuery} />

        <Results results={this.state.results} />
      </div>
    )
  }

}

module.exports = Search;
