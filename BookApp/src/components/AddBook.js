import React from 'react';

export default class AddBook extends React.Component{
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
            <form className='add-option' onSubmit={this.onFormSubmit}>
                
            <input className='add-option__input' type="text" name="option"></input>
            <button className='button'>Add Book</button>
            
        </form>
        )
    }
}
