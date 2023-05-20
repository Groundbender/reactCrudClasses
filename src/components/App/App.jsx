import { Component } from "react";

import SearchPanel from "../SearchPanel/SearchPanel";
import AppFilter from "../AppFilter/AppFilter";
import AppInfo from "../AppInfo/AppInfo";
import EmployeesList from "../EmploeesList/EmploeesList";
import EmployeesAddForm from "../EmployeesAddForm/EmployeesAddForm";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "John",
          salary: 800,
          increase: false,
          id: 1,
        },
        {
          name: "Alex",
          salary: 3000,
          increase: true,
          id: 2,
        },
        {
          name: "Carl",
          salary: 15000,
          increase: false,
          id: 3,
        },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex((elem) => elem.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);

      // const newArr = [...before, ...after];

      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (newItem) => {
    this.setState(({ data }) => {
      return {
        data: [...data, newItem],
      };
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList data={data} onDelete={this.deleteItem} />

        <EmployeesAddForm data={data} addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
