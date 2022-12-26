import { useState, useEffect } from "react"
export const Counter = (props)=>{
    const [state,setState] = useState(props.count)
    useEffect(()=>{
        document.title = state
    })
    return(
        <div>
            <h1>Counter:{state}</h1>
            <button onClick={()=>{setState(state+1)}}>+1</button>
            <button onClick={()=>{setState(state-1)}}>-1</button>
            <button onClick={()=>{setState(props.count)}}>Reset</button>
        </div>
    )
}
Counter.defaultProps = {
    count : 100
}