import {Component} from 'react'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './App.css';
import React from "react";

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{name: 'ffsfsdf', salary: 5604, increase: false, id: 1},
				{name: 'ljkljkljkl', salary: 456, increase: true, id: 2},
				{name: 'zxczxcz', salary: 799, increase: false, id: 3},
			]
		}
	}
	
	deleteItem = (id) => {
		this.setState(({data}) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}
	
	render() {
		
		return (
			<div className="app">
				<AppInfo />
				
				<div className="search-panel">
					<SearchPanel/>
					<AppFilter/>
				</div>
				
				<EmployersList
					data={this.state.data}
					onDelete={this.deleteItem}
				/>
				<EmployersAddForm/>
			</div>
		);
	}
}

export default App;
