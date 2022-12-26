import React from 'react';

import Option  from "./Option"
const Options =(props)=> {
    return (
    <div className='widget-header'>   
        <h2 className='widget-header__title'>List of Books</h2>
       { props.myBooks.map((myBook) => <Option className='.widget__message' optionText={myBook} removeOne={props.removeOne}/>) }
       <button className="button" onClick={props.removeAll}>Remove All</button>
        
    </div>
    )
}
export default Options