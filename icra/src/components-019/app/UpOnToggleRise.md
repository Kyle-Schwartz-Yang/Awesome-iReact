<!-- Не самое очевидное решение -->

# `onToggleRise` | `onToggleIncrease` - Don't Repeat Yourself

> Напомню что решение у них может быть одинаковое через и лучше через map() , только для демонстрации я использовал для них разные варианты решения

```jsx
/* ----------- APP.JSX ----------
- Использовать один метод вместо двух.
*/
onToggleProp = (id, prop) => {
  this.setState((state) => ({
    data: state.data.map((item) =>
      item.unique === id ? { ...item, [prop]: !item[prop] } : item
    ),
  }));
};

/* ---------- EMPLOYEES-LIST.JSX ----------
- Нужно получить дата атрибут в аргумент
*/

const elements = props.data.map((item) => {
  const { unique, ...itemProps } = item;

  return (
    <EmployeesListItem
      key={unique}
      onDel={() => props.onDelete(unique)}
      {...itemProps}
      onToggleProp={(e) => props.onToggleProp(unique, e.currentTarget.getAttribute('data-toggle'))}
    ></EmployeesListItem>
  );
});

// ? ЕЩЕ ВАРИАНТ ДЛЯ ПОЛУЧЕНИЯ ДАТА АТРИБУТА

   <EmployeesListItem
      key={unique}
      {...itemProps}
      onDel={() => props.onDelete(unique)}
      onToggleProp={(e) => props.onToggleProp(unique, e.target.dataset.toggle)}
      data-toggle={...} // Также можно сделать динамическим data, в данном случае конечно это не подходит, но о такой возможности надо знать
    ></EmployeesListItem>


/* --------- EMPLOYEES-LIST-ITEM.JSX ----------
- Добавить дата атрибут для rise / increase
*/

<span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise">{name}</span>

  <button type="button" className="btn-cookie btn-sm" onClick={onToggleProp} data-toggle="increase">
            <i className="fas fa-cookie"></i>
  </button>

```
