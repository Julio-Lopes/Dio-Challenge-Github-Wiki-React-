import React from 'react';
import {ButtonContainer} from "./styles";


const Button = ({onClick}) => {
  return (
    <div>
      <ButtonContainer onClick={onClick}>
        Buscar
      </ButtonContainer>
    </div>
  )
}

export default Button;