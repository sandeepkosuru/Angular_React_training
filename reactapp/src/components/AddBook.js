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
            <form onSubmit={this.onFormSubmit}>
            <input type="text" name="option"></input>
            <button >Add Book</button>
        </form>
        )
    }
}
