import React, { Component } from "react";


var someArray = [];

// Here we include all of the sub-components
class App extends Component{
	constructor(props) {
		super(props);
		
		

		};
		
	




	

	

	


  	render() {
  		return(
  			<div>
  					<div className ="container">

  					<div className="panel panel-default">
  						<div className="panel-heading">{console.log(this.props.userData)}</div>
 						 <div className="panel-body">Email</div>
					</div>

					<button type="button" className="btn btn-info">Confirm</button>

					</div>

					

  			</div>



  		)

  	}
};

module.exports = App;
