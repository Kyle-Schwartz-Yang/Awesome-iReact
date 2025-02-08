import React from "react";

import "./search-panel.css";

class SearchPanel extends React.Component {
  state = {
    term: "",
  };

  onUpdateSearch = (e) => {
    this.setState({ term: e.target.value });
    this.props.onSearch(e.target.value);
  };

  render() {
    const { term } = this.state;

    return (
      <input
        type="text"
        placeholder="Найти сотрудника"
        className="form-control search-input"
        onChange={this.onUpdateSearch}
        value={term}
      />
    );
  }
}

export default SearchPanel;
