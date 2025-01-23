
// ----------------------------------------------------------
// ----------------------------------------------------------

// Якщо пропс label не передано, кнопка відобразить стандартний текст "Click me".

import React, { Component } from "react";

class Button extends Component {
  static defaultProps = {
    label: "Click me",
  };

  render() {
    return <button>{this.props.label}</button>;
  }
}

// export default Button;


// ----------------------------------------------------------
// ----------------------------------------------------------



// Задання заголовка сторінки

class AboutPage extends Component {
  static pageTitle = "About Us";

  componentDidMount() {
    document.title = AboutPage.pageTitle;
  }

  render() {
    return <h1>Welcome to the About Page</h1>;
  }
}

// export default AboutPage;

// ----------------------------------------------------------
// ----------------------------------------------------------


//  -------------------------Задання propTypes
// import PropTypes from "prop-types";

class Greeting extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

