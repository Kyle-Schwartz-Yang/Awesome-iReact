# REACT: inline Style

<!-- ======================================================================== -->

1. Формат объекта:

- Имена CSS-свойств записываются в _camelCase_:
  - **`background-color`** → `backgroundColor`
  - **`font-size`** → `fontSize`

```jsx
function App() {
  const style = {
    backgroundColor: "lightblue",
    color: "darkblue",
    padding: "10px",
    borderRadius: "5px",
  };

  return <div style={style}>Привет, React!</div>;
}
```

<!-- ======================================================================== -->

2. Динамическая стилизация: Вы можете создавать стили на основе состояния или пропсов:

```jsx
function App({ isActive }) {
  const style = {
    backgroundColor: isActive ? "green" : "red",
  };
  return (
    <div style={style}>Состояние: {isActive ? "Активен" : "Неактивен"}</div>
  );
}
```

<!-- ======================================================================== -->

3. Автоматическое добавление единиц измерения: Если значение свойства — число (например, 10), React автоматически добавит пиксели. Исключение — свойства, которые не используют единицы, например, `zIndex` или `opacity`.

<!-- ======================================================================== -->

4. Отсутствие псевдоклассов и медиа-запросов: Inline-стили не поддерживают :hover, :active, @media, поэтому для таких случаев нужно использовать:

- CSS-классы.
- CSS-in-JS библиотеки, например, styled-components или emotion.

<!-- ======================================================================== -->

5. Производительность: Inline-стили могут ухудшать производительность при избыточном создании новых объектов стилей на каждом рендере. Чтобы избежать этого, лучше выносить стили в переменные или мемоизировать их:

```jsx
const style = React.useMemo(() => ({ color: "blue" }), []);
```

<!-- ======================================================================== -->

### Когда использовать inline style

- Динамические стили: Когда стиль зависит от данных или состояния компонента.
- Маленькие проекты: Для простых приложений, где нет сложной системы стилизации.