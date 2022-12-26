import React from 'react';
import Action from './Action'
import Header from './Header'
import Option from './Option'
import Options from './Options'
import AddBook from './AddBook'
import OptionModal from './OptionModal'
import '../styles/styles.scss'
;
export default class BookApp extends React.Component{
    constructor(props){
        super(props)
        this.removeAll = this.removeAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.removeOne = this.removeOne.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this)
        this.state = {
                books : [],
                selectedOption : undefined
                
        }
    }
    componentDidMount(){
        const json = localStorage.getItem("books")
        const books = JSON.parse(json)
        // if(Object.keys(books).length==0){
        //     document.getElementById("random").disabled = true;
        // }
        // else{
        //     document.getElementById("random").disabled = false;

        // }
        console.log(Object.keys(books).length)
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
        // if(json.length==2){
        //     document.getElementById("random").disabled = true;
        // }
        // else{
        //     document.getElementById("random").disabled = false;

        // }

    }
    removeAll(){
        this.setState(()=>{
            return {
                books : []
              
            }
        }
        )
    }
    handleClearSelectedOption(){
        this.setState(()=>({
            selectedOption : undefined
        }))
    }
    onFormSubmit(bookName){
        this.setState((oldState)=>{
            const temp = 0
            const ind = oldState.books.indexOf(bookName)
            if(bookName != ""){
            if(oldState.books.length > 0 ){
                if(ind == -1){
                    return{
                        books : oldState.books.concat(bookName)
                        }}
                else{
                    this.setState(()=>({
                        selectedOption : "Book Already Exists"
                }))
                }
             }
            else
        {            
            return{          
                books : oldState.books.concat(bookName)   
            }
        }
      } 
    else{
        this.setState(()=>({
            selectedOption : "Enter a valid book"
    }))
        } })
        
        }
    
    handlePick(){
        const rand = Math.floor(Math.random()*this.state.books.length)
        console.log(this.state.books[rand])
        this.setState(()=>({
            selectedOption : this.state.books[rand]
    }))
    }
    removeOne(book){
        // alert("Remove one book was clicked"+book)
        this.setState((oldState)=>{
            return{
            books : oldState.books.filter((myBook)=>book !== myBook)
        }
         })
    }

    render(){
        const title = "TCS Book App"
        const subTitle = "You can get excellent books here...!"
        return(
            <div>
                <Header myTitle={title} sub={subTitle}/>
                <Options myBooks={this.state.books} removeAll={this.removeAll} removeOne={this.removeOne}/>
                <AddBook onFormSubmit={this.onFormSubmit}/>
                <Action pickBook={this.handlePick} hasoption={this.state.books.length>0}/>
                <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption}/>
            </div>       
        )
    } 
}