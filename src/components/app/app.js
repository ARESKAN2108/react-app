import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.css';
function App () {

    const data = [
        {name: 'Max', salary: 800, increase: false},
        {name: 'Alex', salary: 1500, increase: true},
        {name: 'Tanya', salary: 700, increase: false}
    ];

    return (
        <div className='app'>
            <AppInfo />

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data = {data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;