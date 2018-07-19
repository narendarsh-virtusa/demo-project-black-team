import React from 'react';
import {connect} from 'react-redux'
import {getEmployees} from '../../../demo/middleware/actions'
import {ListTable} from '../list/list.table'

@connect((state) => {
	return {employees: state.employees};
})

export class ListComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			employeeList: [],
			name: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.handleRefreshClick = this.handleRefreshClick.bind(this)

	}
	handleChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox'
			? target.checked
			: target.value;
		const name = target.name;
		this.setState({[name]: value});
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	componentWillMount() {
		this.props.dispatch(getEmployees());
	}
	/** Call each time stor disptach called **/
	componentWillReceiveProps(nextProps) {
		const {employees} = nextProps;
		if (nextProps.employees !== []) {
			this.setState({employeeList: employees});
		}
	}
	handleRefreshClick(e) {
		e.preventDefault()
		this.props.dispatch(getEmployees());
	}

	render() {
		return (

			<div>
				<div className="panel panel-primary">
					<div className="panel-heading">Search By Name</div>
					<div className="panel-body">
						<form className="form-horizontal">
							<div className="form-group">
								<label className="control-label col-sm-3" htmlFor="tail">Search By First Names:</label>
								<div className="col-sm-6">
									<input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleChange}/>
									<p/>
									<a type="button" href={'#/view/' + this.state.name} className="btn btn-primary">Find Employee</a>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className="panel panel-primary">
					<div className="panel-heading">Employees</div>
					<div className="panel-body">
						<ListTable employeesList={this.state.employeeList}/>
					</div>
				</div>
			</div>

		);
	}
}
