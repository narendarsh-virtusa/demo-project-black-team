import React from 'react';
import {
	Link
}
	from 'react-router';

export class ListTableRow extends React.Component {

	constructor(props) {
		super(props);
		this.employeeDetails = this.employeeDetails.bind(this);
	}
	employeeDetails(event) {
		const {
			employee
		} = this.props;
	}
	render() {
		const {
			employee
		} = this.props;
		let id = employee.id;
		return (

			// <div className="row" style={{padding : '15px'}}>
			// 	<div className="col-sm-2">{employee.id}</div>
			// 	<div className="col-sm-2">{employee.firstName} {employee.lastName}</div>
			// 	<div className="col-sm-2">{employee.age}</div>
			// 	<div className="col-sm-2">{employee.country}</div>
			// 	<div className="col-sm-2">{employee.productName}</div>
			// 	<div className="col-sm-2">
			// 		<button type="button" className="btn btn-info"> More Info</button>
			// 	</div>
			// 	{/* <div>

			// 			<div className="col-sm-2">{employee.productValue}</div>
			// 			<div className="col-sm-2">{employee.productStartDate}</div>
			// 			<div className="col-sm-2">{employee.regularContribution}</div>
			// 			<div className="col-sm-2">{employee.latestContribution}</div>

			// 	</div> */}
			// </div>

			<tr>
				<td> {employee.id} </td>
				<td> {employee.firstName} {employee.lastName} </td>
				<td> {employee.age}</td >
				<td> {employee.country}</td >
				<td> {employee.productName}</td >
				<td>
					<button type="button" className="btn btn-info"> More Info</button>
				</td>
			</tr>

		);
	}
}
