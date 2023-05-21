import EmployeesListItem from "../EmployeesListItem/EmployeesListItem";
import "./EmployeesList.css";
const EmployeesList = ({ data, onDelete, onToggleProp, updateSalary }) => {
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
            onToggleProp={(e) =>
              onToggleProp(id, e.currentTarget.dataset.toggle)
            }
          />
        );
      })}
    </ul>
  );
};

export default EmployeesList;
