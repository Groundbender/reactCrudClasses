import EmployeesListItem from "../EmployeesListItem/EmployeesListItem";
import "./EmployeesList.css";
const EmployeesList = ({ data, onDelete, onToggleIncrease, onToggleRise }) => {
  // const elements = data.map((item) => {
  //   return <EmployeesListItem {...item} />;
  // });

  return (
    <ul className="app-list list-group">
      {data.map((item) => {
        const { id, ...itemProps } = item;
        return (
          <EmployeesListItem
            key={id}
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleIncrease={() => onToggleIncrease(id)}
            onToggleRise={() => onToggleRise(id)}
          />
        );
      })}
    </ul>
  );
};

export default EmployeesList;
