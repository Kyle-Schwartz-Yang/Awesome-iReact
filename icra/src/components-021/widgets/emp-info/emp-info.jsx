// -------------------------------------------------
import './emp-info.css';
// -------------------------------------------------


const EmpInfo = (props) => {

  return(
    <div className="emp-info">
        <h1>Учет сотруднико в компании N</h1>
        <h2>Общее количество сотрудников: {props.employees}</h2>
        <h2>Премию получат: {props.increased()}</h2>
    </div>
  )
}

export default EmpInfo;