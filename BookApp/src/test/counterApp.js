class BookApp extends React.Component{
    constructor(props){
        super(props)
        this.add = this.add.bind(this)
        this.sub = this.sub.bind(this)
        this.reset = this.reset.bind(this)
        this.state = {
            counter: 0
        }
    }
    componentDidMount(){
        const json = localStorage.getItem("counter")
        const counter = JSON.parse(json)
        this.setState(()=>{ 
            return { 
                counter:counter 
            }
        })
        // console.log("I'm inside componentDidMount")
    }
    componentDidUpdate(a,b){
        const json = JSON.stringify(this.state.counter)
        localStorage.setItem("counter",json)
        // console.log("I'm inside componentDidUpdate")

    }
    add(){
        this.setState((oldState)=>{
            return {
                counter : oldState.counter + 1
            }
         })
        // console.log("Add")
    }
    sub(){
        this.setState((oldState)=>{
            return {
                counter : oldState.counter - 1
            }
         })
        // console.log("sub")
    }
    reset(){
        this.setState((oldState)=>{
            return {
                counter : oldState.counter = 0
            }
         })
        // console.log("reset")
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.counter}</h1>
                <button onClick={this.add}>+1</button>    
                <button onClick={this.sub}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>       
        )
    }
}

ReactDOM.render(<BookApp name="sandeep"/>,document.getElementById("root"))
