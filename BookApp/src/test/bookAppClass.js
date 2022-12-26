class BookApp extends React.Component{
    render(){
        const title = "TCS Book Application"
        const subTitle = "Help me decide a book"
        const books = ["Python","Java","C Prog"]
        
        return(
            <div>
                <Header myTitle={title} sub={subTitle}/>
                <Options myBooks={books}/>
                <AddBook/>
                <Action/>
            </div>       
        )
    }
    
}
class Header extends React.Component{
    render(){
        return (<div>
        <h1>{this.props.myTitle}</h1>
        </div>)
    }
}
class Options extends React.Component{
   
    render(){
        return (
        <div>   
            <h2>List of Books</h2>
           { this.props.myBooks.map((myBook) => <Option optionText={myBook}/>) }
           <button onClick={this.removeAll}>Remove All</button>
            
        </div>
        )
    }
}
class AddBook extends React.Component{
    onFormSubmit(e){
        e.preventDefault();
        console.log("Add book")
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


class Option extends React.Component{
    render(){
        return (
        <div>
            {this.props.optionText}
        </div>
            )
    }
}
class Action extends React.Component{
    
    render(){
        return (<button onClick={this.handlePick}>Help me decide the Book</button>)
    }

}
ReactDOM.render(<BookApp/>,document.getElementById("root"))