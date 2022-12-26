// var courses = {
//     c1:"ReactJS",
//     c2:"Angular",
//     c3:"Python"
// }

var book = {
    title:"Python",
    subtitle: "OOPS Concept",
    topics: ["classes","objects","inheritance"]
}
// var user = {
//     name:"Sandeep",
// location:"Hyd"
// }
// const getLocation = () =>  <h1>{user.location}</h1> 

// var template2 = <div>
//     {getLocation()}
// </div>
const onFormSubmit = (e) =>{
    e.preventDefault();
    const bookName = e.target.elements.option.value
    console.log("onFormSubmit is executed"+bookName)
    
    if (bookName){
        book.topics.push(bookName)
        e.target.elements.option.value = ""

        renderApp()

    }
}
const reset = () =>{
    
    book.topics = []

    renderApp()
}

const decide = () => {
    const rand = Math.floor(Math.random()*book.topics.length)
    const bookSelected = book.topics[rand]
    console.log(bookSelected)
    document.getElementById("show").innerHTML= bookSelected
    renderApp()
}

var approot = document.getElementById("root")
const renderApp = () =>{
var template = 
<div>
   
    <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button >Add Book</button>
    </form>

    <h1>Book: {book.title}</h1>
    <h2>Concept: {book.subtitle}</h2>
    <h2>No. of topics: {book.topics.length}</h2>
    <p>{ book.topics.length > 0 ? "These are the topics":"No topics" }
    </p>
    <ol>
        {
            book.topics.map( (topics) => <li>{topics}</li> )
        }
    </ol>
    <button onClick={decide}>Decide a book</button>
<h1 id='show'></h1>
    <button onClick={reset}>RESET</button>
</div>
 const clickOperation = (e)=>{
    // e.preventDefault();
    // e.target.elements.message.value = "Well Done"
    // e.target.elements.btn.text = "Hide"

    if(document.getElementById("msg").innerHTML == "Well Done"){
        document.getElementById("msg").innerHTML = ""
        document.getElementById("btn").textContent = "Show"
    }
    else{
        document.getElementById("msg").innerHTML = "Well Done"
        document.getElementById("btn").textContent = "Hide"
    }
    ReactDOM.render(template3,approot)
 }

var template3 = <div>
    {/* <form onSubmit={clickOperation}>
    <button>show</button>
    <h1 id="msg" name="message"></h1>
    </form>       */}
        

    <button id="btn" onClick={clickOperation}>Show</button>
<h1 id="msg" name="message"></h1>
    </div> 
    ReactDOM.render(template3,approot)
}
renderApp()