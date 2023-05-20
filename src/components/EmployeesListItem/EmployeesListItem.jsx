import "./EmployeesListItem.css";

const EmployeesListItem = (props) => {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     increase: false,
  //     like: false,
  //   };
  // }

  // onIncrease = () => {
  //   this.setState(({ increase }) => ({
  //     increase: !increase,
  //   }));
  // };

  // setLike = () => {
  //   this.setState(({ like }) => ({
  //     like: !like,
  //   }));
  // };

  const {
    name,
    salary,
    onDelete,
    onToggleIncrease,
    onToggleRise,
    increase,
    like,
  } = props;
  // const { increase, like } = this.state;
  // let classNames = increase
  //   ? "list-group-item d-flex justify-content-between " + "increase"
  //   : "list-group-item d-flex justify-content-between ";

  // classNames = like ? classNames + " like" : classNames;
  let classNames = "list-group-item d-flex justify-content-between";
  if (increase) {
    classNames += " increase";
  }

  if (like) {
    classNames += " like";
  }

  return (
    <li className={classNames}>
      <span className="list-group-item-label" onClick={onToggleRise}>
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          onClick={onToggleIncrease}
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
