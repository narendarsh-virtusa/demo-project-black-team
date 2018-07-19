import employeeReducer from './reducer'
import {
	applyMiddleware,
	createStore
} from "redux"
import thunk from 'redux-thunk'
const middleware = applyMiddleware(thunk);
export default function configureStore(preloadedState) {
	return createStore(employeeReducer, preloadedState, middleware);
}
