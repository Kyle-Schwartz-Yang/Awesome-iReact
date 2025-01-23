
import { Component } from 'react';
import styled from 'styled-components';

import { Button } from './Button';

/* Первое что нет подсказак, где подсказки ? */

const Element = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

// Изменить кнопку.
const BigButton = styled(Button)`
  border: 2px solid #fff;
  margin-top: 30px;
`

export default class StyledComponents extends Component {
  render() {
    return (
      <>
     <Element className='box'>
        Element
      </Element>
      <BigButton>Содержимое</BigButton>
      {/* Переназначить тег можно ad={'Имя ТЕГА'} */}
      <BigButton as={'button'}>Содержимое</BigButton>
      </>
    )
  }
}
