import React from 'react';
import {connect} from 'react-redux'
import {getEmployee, removeEmployee} from '../../../demo/middleware/actions'
import {Notification} from './notification.component'

/** Make the Component smar and access all features from store from Provider***/
@connect((state) => {
	return {employee: state.employee};
})
export class FindComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			employeeObj: {
				id: null,
				name: '',
				firstName: '',
				lastName: ''

			},
			error: false,
			deleted: false
		}
		this.deleteEmployee = this.deleteEmployee.bind(this);
	}
	componentWillMount() {
		const {id} = this.props.params;
		this.props.dispatch(getEmployee(id));
	}
	/** Call each time stor disptach called **/
	componentWillReceiveProps(nextProps) {
		
		const {employee} = nextProps;
		if (nextProps.employee !== []) {
			this.setState({employeeObj: employee});
		}
		
		if (employee.id) {
			this.setState({error: true});
			this.setState({deleted: false});
		}
	}

	deleteEmployee(e) {
		e.preventDefault();
		const {id} = this.props.params;
		//this.props.dispatch(removeEmployee(id));
		this.setState({deleted: true});
	}

	render() {
		let employee = this.state.employeeObj;
		let error = this.state.error;
		let deleted = this.state.deleted;
		return (

			<div className="panel panel-primary">
				<div className="panel-heading">Employee Details</div>
				<div className="panel-body">
					{!error && <Notification message='!!! No Data Found !!!'/>
					}
					{deleted && <Notification message='!!! Sucessfully Deleted !!!'/>
					}
					{(!deleted && error) && <form className="form-horizontal">
						<div className="form-group">
							<label className=" control-label col-sm-4">Account Number</label>
							<div className="col-sm-8">
								<p className="form-control-static">{employee.id}</p>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-sm-4">Name</label>
							<div className="col-sm-8">
								<p className="form-control-static">{employee.firstName} {employee.lastName}</p>
							</div>
						</div>

						<div className="form-group">
							<label className="control-label col-sm-4">Age</label>
							<div className="col-sm-8">
								<p className="form-control-static">{employee.age}</p>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-sm-4">Country</label>
							<div className="col-sm-8">
								<p className="form-control-static">{employee.country}</p>
							</div>
						</div>
						<div className="form-group">
							<label className="control-label col-sm-4">Product Owns</label>
							<div className="col-sm-8">
								<p className="form-control-static">{employee.productName}</p>
							</div>
						</div>

					</form>

					}

				</div>
				<div className="panel-footer">
					<div className="btn-toolbar">
						<a className="btn btn-warning " href='#'>Back</a>
					</div>
				</div>
			</div>

		);
	}
}
