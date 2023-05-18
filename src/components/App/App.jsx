import SearchPanel from "../SearchPanel/SearchPanel";
import AppFilter from "../AppFilter/AppFilter";
import AppInfo from "../AppInfo/AppInfo";
import EmployeesList from "../EmploeesList/EmploeesList";
import EmployeesAddForm from "../EmployeesAddForm/EmployeesAddForm";

import "./App.css";

function App() {
  const data = [
    {
      name: "John",
      salary: 800,
      increase: false,
      id: 1
    },
    {
      name: "Alex",
      salary: 3000,
      increase: true,
      id: 2
    },
    {
      name: "Carl",
      salary: 15000,
      increase: false,
      id: 3
    },
  ];
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
