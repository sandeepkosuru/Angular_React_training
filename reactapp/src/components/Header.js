
import React from 'react';
const Header = (props) => {
    return(
      (<div>
        <h1>{props.myTitle}</h1>
        <h2>{props.sub}</h2>
        </div>)
    )
}
export default  Header