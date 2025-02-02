import "./emp-filter.css";

const EmpFilter = () => {
  const buttons = [
    { name: "Все сотрудника", active: true },
    { name: "На повышение", active: false },
    { name: "3/П больше 1000$", active: false },
  ];

  const buttonList = buttons.map((button, index) => (
    <button
      type="button"
      key={index}
      className={`btn btn-${button.active ? "light" : "outline-light"}`}
    >
      {button.name}
    </button>
  ));

  return <div className="btn-group">{buttonList}</div>;
};

export default EmpFilter;
