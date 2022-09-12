import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {
	
	const ListItem = data.map(item => (
		<EmployeesListItem {...item}/>
	))
	
	return (
		<ul className="app-list list-group">
			{ListItem}
		</ul>
	)
}

export default EmployeesList;