
import React from 'react';
const Option =(props)=> {
   
    return (
    <div className='option'>
        <p className='option__text'>{props.optionText}</p>
        <button class='button' onClick= { ()=> {props.removeOne(props.optionText)} }>X</button>
      
    </div>
        )
}
export default Option