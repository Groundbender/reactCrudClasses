import EmployeesListItem from "../EmployeesListItem/EmployeesListItem";
import "./EmployeesList.css";
const EmployeesList = ({ data }) => {
  // const elements = data.map((item) => {
  //   return <EmployeesListItem {...item} />;
  // });

  return (
    <ul className="app-list list-group">
      {data.map((item) => {
        const { id, ...itemProps } = item;
        return <EmployeesListItem key={id} {...itemProps} />;
      })}
    </ul>
  );
};

export default EmployeesList;
