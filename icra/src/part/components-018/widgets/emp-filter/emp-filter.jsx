
import './emp-filter.css';


const EmpFilter = () => {
  return (

    <div className="btn-group">
        <button type="button" className="btn btn-light">Все сотрудника</button>
        <button type="button" className="btn btn-outline-light">На повышение</button>
        <button type="button" className="btn btn-outline-light">3/П больше 1000$</button>
    </div>

  );
}

export default EmpFilter;