<!-- ------------------------------------------------- -->

# APP.JSX

<!-- ------------------------------------------------- -->

```jsx

this.state = {
  data: [
    { name: "John", salary: 200, unique: 1994, increase: true, rise: true },
    { name: "Ivan", salary: 5002, unique: 2134, increase: false, rise: false },
    { name: "Tommy", salary: 1001, unique: 3312, increase: false, rise: false },
  ],
  term: "",
  filter: "",
};

onUpdateFilter = (filter) => {
  this.setState({ filter });
};

onFilterEmployees = (data, filter) => {
  switch (filter) {
    case "Rise":
      return data.filter((item) => item.rise);
    case "Salary":
      return data.filter((item) => item.salary > 1000);
    default:
      return data;
  }
};
/*-------------------------------*/
render(){
  return <EmpFilter onUpdateFilter={this.onUpdateFilter}></EmpFilter>;
}
/*-------------------------------*/
```

### **ERR MY**

- Здесь все хорошо !

<!-- @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ -->

<!-- ------------------------------------------------- -->

# EMPLOYEES-FILTER.JSX

<!-- ------------------------------------------------- -->

```jsx
this.state = {
  filter: "",
};

onFilterEmp = (e) => {
  this.setState({ filter: e.currentTarget.dataset.filter });
  this.props.onUpdateFilter(e.currentTarget.dataset.filter);
};

/*-------------------------------*/
  <button type="button" className="btn btn-light" data-filter="All"  onClick={this.onFilterEmp}>Все сотрудника</button>
  <button type="button" className="btn btn-outline-light" data-filter="Rise"  onClick={this.onFilterEmp}>На повышение</button>
  <button type="button" className="btn btn-outline-light" data-filter="Salary"  onClick={this.onFilterEmp}>3/П больше 1000$</button>
/*-------------------------------*/
```

### **ERR MY**

- `EMPLOYEES-FILTER.JSX` Здесь состояние ненужно отслеживать потому что мы его не используем и нет в нем необходимост...
- Нам достаточно `this.props.onUpdateFilter` который приходит и забирает в данном случае `data-` атрибут.
- Также желательно подумать про оптимизацию и элементы которые повторяются выносить в массив `buttonArray.map()`
- Также можно отказаться от data-filter, НО это не обязательно

<!-- @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ -->
