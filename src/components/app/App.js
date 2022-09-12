import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './App.css';

function App() {
	
	const data = [
		{name: 'ffsfsdf', salary: 5604, increase: false},
		{name: 'ljkljkljkl', salary: 456, increase: true},
		{name: 'zxczxcz', salary: 799, increase: false},
	]
	
	return (
		<div className="app">
			<AppInfo />
			
			<div className="search-panel">
				<SearchPanel/>
				<AppFilter/>
			</div>
			
			<EmployeesList data={data}/>
			<EmployeesAddForm/>
		</div>
	);
}

export default App;
