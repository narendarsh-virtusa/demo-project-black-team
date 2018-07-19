import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import App from './app.jsx';
import {CustomerHome} from '../src/app/demo/view/home/home'
/** Check the Appplication Module exists**/
describe('App Module', () => {
	let component;
	beforeEach(() => {
		component = shallow(<App/>);
	});
	it('Check Applcation Module render ', () => {
		expect(component.find('div').length).toEqual(1);
	});
	it('Check CustomerHome Module exists ', () => {
		expect(component.find('CustomerHome').length).toEqual(1);
	});
});
