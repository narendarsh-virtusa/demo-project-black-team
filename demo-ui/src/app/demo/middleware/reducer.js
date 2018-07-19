import * as constant from './constants'
const initialState = {
	id: '',
	employee: {},
	employees: []
};
export default function employeeReducer(state = initialState, action) {
	switch(action.type) {
		case constant.REQUEST_EMPLOYEES:
			{
				return Object.assign({}, state, {});
			}
		case constant.RECEIVE_EMPLOYEES:
			{
				return Object.assign({}, state, {
					employees: action.employees
				})
			};
		case constant.REQUEST_EMPLOYEE:
			{
				return Object.assign({}, state, {});
			}
		case constant.RECEIVE_EMPLOYEE:
			{
				return Object.assign({}, state, {
					employee: action.employee
				})
			};
		case constant.REQUEST_EMPLOYEE_ADD:
			{
				return Object.assign({}, state, {});
			}
		case constant.RECEIVE_EMPLOYEE_ADD:
			{
				return Object.assign({}, state, {
					employee: action.employee
				})
			};
		case constant.REQUEST_EMPLOYEE_DELETE:
			{
				return Object.assign({}, state, {});
			}
		case constant.RECEIVE_EMPLOYEE_DELETE:
			{
				return Object.assign({}, state, {
					employee: action.employee
				})
			};
		default:
			return state;
	}
}
