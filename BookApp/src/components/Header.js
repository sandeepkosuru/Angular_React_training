
import React from 'react';
const Header = (props) => {
    return(
      (<div className='header'>
        <div className='container'> 
        <div className='header__title'><h1 >{props.myTitle}</h1></div>
        <div className='header__subtitle'><h3 >{props.sub}</h3></div>
        </div>
        </div>)
    )
}
export default  Header