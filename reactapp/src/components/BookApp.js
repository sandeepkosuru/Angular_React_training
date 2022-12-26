import React from 'react';

import Action from './Action'
import Header from './Header'
import Option from './Option'
import Options from './Options'
import AddBook from './AddBook'

export default class BookApp extends React.Component{
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
        if(books){
            this.setState(()=>{ 
                return { 
                books:books 
                }
            })
        }
        
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