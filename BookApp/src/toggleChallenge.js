class BookApp extends React.Component{
    constructor(props){
                super(props)
                this.toggle = this.toggle.bind(this)
                this.state = {
                    visibility: true
                }
            }
    toggle(){
        this.setState((oldState)=>{
                        return {
                            visibility : oldState.visibility = !oldState.visibility
                        }
                     })
    }
    render(){
                return(
                    <div>
                        <button onClick={this.toggle}>{this.state.visibility ? "Show Text" : "Hide Text"}</button>    
                        <h1>{this.state.visibility ? "" : "Sandeep"}</h1>
                    </div>       
                )
            }
    }
    ReactDOM.render(<BookApp/>,document.getElementById("root"))