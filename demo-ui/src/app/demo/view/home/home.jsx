import React from 'react';
import {Router, Route, hashHistory, IndexRoute, Link} from 'react-router';
import {Provider} from 'react-redux';
import {NavigationBar} from '../home/navigation'
import {FindComponent} from '../components/find.component'
import {ListComponent} from '../components/list.component'

const store = configureStore();
import configureStore from '../../../demo/middleware/store'
export class CustomerHome extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<NavigationBar></NavigationBar>
				<Provider store={store}>
					<Router history={hashHistory}>
						<Route path="/" component={ListComponent}/>
						<Route path="/list" component={ListComponent}/>
						<Route path="/view/:id" component={FindComponent}/>

					</Router>
				</Provider>
			</div>
		)
	}
}
