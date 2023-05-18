import SearchPanel from "../SearchPanel/SearchPanel";
import AppFilter from "../AppFilter/AppFilter";
import AppInfo from "../AppInfo/AppInfo";
import EmployeesList from "../EmploeesList/EmploeesList";
import EmployeesAddForm from "../EmployeesAddForm/EmployeesAddForm";

import "./App.css";

function App() {
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
