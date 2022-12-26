import React from 'react';

import Option  from "./Option"
const Options =(props)=> {
    return (
    <div>   
        <h2>List of Books</h2>
       { props.myBooks.map((myBook) => <Option optionText={myBook} removeOne={props.removeOne}/>) }
       <button onClick={props.removeAll}>Remove All</button>
        
    </div>
    )
}
export default Options