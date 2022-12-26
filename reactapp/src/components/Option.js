import React from 'react';
const Option =(props)=> {
   
    return (
    <div>
        {props.optionText}
        <button onClick= { ()=> {props.removeOne(props.optionText)} }>remove</button>
      
    </div>
        )
}
export default Option