import React from 'react';
import { ListTableRow } from './list.table.row'
export class ListTable extends React.Component {
	constructor(props) {
		super(props);
		var employeesSorted = this.props.employeesList.sort((a, b) => a.empId - b.empId);
	}
	render() {
		var employeesList = this.props.employeesList.sort((a, b) => a.empId - b.empId)
		return (



			// <div>
			// 	<div className="row" style={{ padding: '10px' }}>
			// 		<div className="col-sm-2"><h4>Account No</h4></div>
			// 		<div className="col-sm-2"><h4>Name</h4></div>
			// 		<div className="col-sm-2"><h4>Age</h4></div>
			// 		<div className="col-sm-2"><h4>Country</h4></div>
			// 		<div className="col-sm-2"><h4>Product Name</h4></div>
			// 		<div className="col-sm-2"><h4>More details</h4></div>
			// 		{employeesList.map((employee, i) => <ListTableRow key={employee.id} employee={employee} />)}
			// 	</div >
			// 	<hr /> 
			// </div>

			<table className="table table-striped table-bordered">
				<thead>
					<tr>
						<th>Account No</th>
						<th> Name</th>
						<th>Age</th>
						<th>Country</th>
						<th>Products</th>
						<th>More Details</th>
					</tr>
				</thead>
				<tbody>
					{employeesList.map((employee, i) => <ListTableRow key={employee.id} employee={employee} />)}
				</tbody>
			</table>

		);
			}
		}
