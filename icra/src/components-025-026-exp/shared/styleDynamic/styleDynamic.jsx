




import React from 'react'
import './styleDynamic.scss';

/*
 Ничего особенного, динамические стили крайне просто реализовывать.


*/



export default class StyleDynamic extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      isFlag: true,
    }
  }


  render() {

    const {isFlag} = this.state;
    const style = isFlag ? {color: 'red'} : null;

    return (
      <div>
        <button 
        className='button' 
        style={style}
        onClick={() => this.setState({isFlag: !isFlag})}>
          Dynamic style
        </button>
      </div>
    )
  }
}
