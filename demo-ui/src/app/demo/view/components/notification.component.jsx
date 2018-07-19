import React from 'react';

export class Notification extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
		let message = this.props.message;


    return(
			<div className="panel panel-danger">
					<div className="panel-heading">Description</div>
					<div className="panel-body">
						<label>{this.props.message}</label>
						</div>
			</div>
    )
  }
}
