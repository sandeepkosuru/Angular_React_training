let visibility = false

const toggleHandler = (e) =>{
 console.log("Handler Function")
 visibility = !visibility
renderApp()
 
}
const renderApp = () =>{

    const template = <div>
    <button onClick={toggleHandler}>{visibility?"Hide":"Show"}</button>
    <h1>{visibility?"Well Done":""}</h1>

</div>
ReactDOM.render(template,document.getElementById("root"))

}
renderApp()

