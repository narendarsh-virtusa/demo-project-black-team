import * as constant from './constants'
import {
	fetchEmployees,
	fetchEmployee,
	addEmployee,
	deleteEmployee
}
from './rest.service'
	/** Get List **/
function requestEmployees() {
	return {
		type: constant.REQUEST_EMPLOYEES
	}
}

function receiveEmployees(json) {
	return {
		type: constant.RECEIVE_EMPLOYEES,
		employees: json
	};
}
/**return all Employee list **/
export function getEmployees() {
	return dispatch => {
		dispatch(requestEmployees());
		return fetchEmployees().then(json => dispatch(receiveEmployees(json)))
	}
}
/** Get Employee **/
function requestEmployee(id: string) {
	return {
		type: constant.REQUEST_EMPLOYEE
	}
}

function receiveEmployee(json) {
	return {
		type: constant.RECEIVE_EMPLOYEE,
		employee: json
	};
}
/**return all Employee list **/
export function getEmployee(id: string) {
	return dispatch => {
		dispatch(requestEmployee(id));
		return fetchEmployee(id).then(json => dispatch(receiveEmployee(json)))
	}
}
/** Add Employee **/
function requestAddEmployee() {
	return {
		type: constant.REQUEST_EMPLOYEE_ADD
	}
}

function receiveAddEmployee(json) {
	return {
		type: constant.RECEIVE_EMPLOYEE_ADD,
		employee: json
	};
}
/**return all Employee list **/
export function createEmployee(employee) {
	return dispatch => {
		dispatch(requestAddEmployee());
		return addEmployee(employee).then(json => dispatch(receiveAddEmployee(json)))
	}
}
/** Delete Employee **/
function requestDeleteEmployee() {
	return {
		type: constant.REQUEST_EMPLOYEE_DELETE
	}
}

function receiveDeleteEmployee(json) {
	return {
		type: constant.RECEIVE_EMPLOYEE_DELETE,
		employee: json
	};
}
/**return all Employee list **/
export function removeEmployee(id) {
	return dispatch => {
		dispatch(requestDeleteEmployee(id));
		return deleteEmployee(id).then(json => dispatch(receiveDeleteEmployee(json)))
	}
}
