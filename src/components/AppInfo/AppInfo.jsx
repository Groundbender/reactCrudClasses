import "./AppInfo.css";

const AppInfo = ({ data }) => {
  const employeesOnRise = data.filter((emp) => emp.increase);

  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании N </h1>
      <h2>Общее число сотрудников: {data.length}</h2>
      <h2>Премию получат: {employeesOnRise.length} </h2>
    </div>
  );
};

export default AppInfo;
