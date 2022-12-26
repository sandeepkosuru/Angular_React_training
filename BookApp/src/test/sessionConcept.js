class BookApp extends React.Component{
    constructor(props){
        super(props)
        this.removeAll = this.removeAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.removeOne = this.removeOne.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.state = {
                books : []
        }
    }
    componentDidMount(){
        const json = localStorage.getItem("books")
        const books = JSON.parse(json)
        this.setState(()=>{ 
            return { 
            books:books 
            }
        })
        console.log("I'm inside componentDidMount")
    }
    componentDidUpdate(a,b){
        const json = JSON.stringify(this.state.books)
        localStorage.setItem("books",json)
        console.log("I'm inside componentDidUpdate")

    }
    removeAll(){
        this.setState(()=>{
            return {
                books : []
            }
        }
        )
    }
    onFormSubmit(bookName){
        this.setState((oldState)=>{
            return{
            books : oldState.books.concat(bookName)
        }
         })
        
    }
    handlePick(){
        const rand = Math.floor(Math.random()*this.state.books.length)
        console.log(this.state.books[rand])
        alert(this.state.books[rand])   
    }
    removeOne(book){
        alert("Remove one book was clicked"+book)
        this.setState((oldState)=>{
            return{
            books : oldState.books.filter((myBook)=>book !== myBook)
        }
         })
    }
    render(){
        const title = "TCS"
        const subTitle = "Help me decide a book"
        return(
            <div>
                <Header myTitle={title} sub={subTitle}/>
                <Options myBooks={this.state.books} removeAll={this.removeAll} removeOne={this.removeOne}/>
                <AddBook onFormSubmit={this.onFormSubmit}/>
                <Action pickBook={this.handlePick}/>
            </div>       
        )
    } 
}
// class Header extends React.Component{
//     render(){
//         return (<div>
//         <h1>{this.props.myTitle}</h1>
//         </div>)
//     }
// }
const Header = (props) => {
    return(
      (<div>
        <h1>{props.myTitle}</h1>
        <h2>{props.sub}</h2>
        </div>)
    )
}
// class Options extends React.Component{
   
//     render(){
//         return (
//         <div>   
//             <h2>List of Books</h2>
//            { this.props.myBooks.map((myBook) => <Option optionText={myBook} removeOne={this.props.removeOne}/>) }
//            <button onClick={this.props.removeAll}>Remove All</button>
            
//         </div>
//         )
//     }
// }
const Options =(props)=> {
        return (
        <div>   
            <h2>List of Books</h2>
           { props.myBooks.map((myBook) => <Option optionText={myBook} removeOne={props.removeOne}/>) }
           <button onClick={props.removeAll}>Remove All</button>
            
        </div>
        )
    }

class AddBook extends React.Component{
    constructor(props){
        super(props)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    onFormSubmit(e){
        e.preventDefault();
        const name = e.target.elements.option.value
        this.props.onFormSubmit(name)

    }
    render(){
        return (
            <form onSubmit={this.onFormSubmit}>
            <input type="text" name="option"></input>
            <button >Add Book</button>
        </form>
        )
    }
}


// class Option extends React.Component{
//     render(){
//         return (
//         <div>
//             {this.props.optionText}
//             <button onClick={this.props.removeOne}>remove</button>
          
//         </div>
//             )
//     }
// }
const Option =(props)=> {
   
        return (
        <div>
            {props.optionText}
            <button onClick= { ()=> {props.removeOne(props.optionText)} }>remove</button>
          
        </div>
            )
    }

// class Action extends React.Component{
    
//     render(){
//         return (<button onClick={this.props.pickBook}>Help me decide the Book</button>)
//     }

// }
const Action = (props) =>{
    

        return (<button onClick={props.pickBook}>Help me decide the Book</button>)
    }


ReactDOM.render(<BookApp/>,document.getElementById("root"))