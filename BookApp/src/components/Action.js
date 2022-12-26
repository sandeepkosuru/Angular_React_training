import React from 'react';

const Action = (props) =>{
    

    return (
    
    <div >
         <button className='big-button' disabled={!props.hasoption} onClick={props.pickBook}>Help me decide the Book</button>
    </div>
    
    )
}

export default Action