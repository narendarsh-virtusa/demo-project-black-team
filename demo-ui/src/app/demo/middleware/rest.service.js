import fetch from 'isomorphic-fetch';
/** REST Call **/
const SERVICE_API = 'http://localhost:3000';
/*** Call for All Employees from Server**/
export function fetchEmployees() {

	return fetch(SERVICE_API + '/customers').then(response => {

		return response.json();
	});
}
/**Add Employee**/
export function addEmployee(employee) {
	return fetch(SERVICE_API, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(employee)
	})
}
/** Get Employee **/
export function fetchEmployee(name) {
	return fetch(SERVICE_API + "/customer/"+name, {
		method: 'GET',
		headers: {
			'Accept': 'application/json'
		}
	}).then(response => {
		return response.json()
	});
}
/*** Dekete Employee **/
export function deleteEmployee(id) {
	return fetch(SERVICE_API + "/" + id, {
		method: 'DELETE',
		headers: {
			'Accept': 'application/json'
		}
	})
}
/***Update Employee ***/
export function updateEmployee(employee) {
	return fetch(SERVICE_API + "/" + employee.id, {
		method: 'PUT',
		headers: {
			'Accept': 'application/json'
		},
		body: employee
	})
}
