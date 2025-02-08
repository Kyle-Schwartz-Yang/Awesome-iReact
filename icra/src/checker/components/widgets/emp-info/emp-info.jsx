// -------------------------------------------------
import "./emp-info.css";
// -------------------------------------------------

const EmpInfo = (props) => {
  // Your code here
  const { employees, increased, risen } = props;
  return (
    <div className="emp-info">
      <h1>Общее количество сотрудников:{employees}</h1>
      <h2>Сотрудників йдуть на підвишення {risen} </h2>
      <h2>Премию получат {increased} </h2>
    </div>
  );
};

export default EmpInfo;
// -------------------------------------------------
