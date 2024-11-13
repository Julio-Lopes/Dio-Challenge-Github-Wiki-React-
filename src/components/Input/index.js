import React from 'react';
import {InputContainer} from "./styles";


const Input = ({value, onChange}) => {
  return (
    <div>
      <InputContainer>
        <input value={value} onChange={onChange}/>
      </InputContainer>
    </div>
  )
}

export default Input;