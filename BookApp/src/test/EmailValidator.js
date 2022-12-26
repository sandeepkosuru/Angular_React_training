import validator from 'validator';
import React from 'react';
export default class EmailValidator extends React.Component{
    check(e){
        e.preventDefault();
        const name = e.target.elements.option.value

        var valid = validator.isEmail(name);
        console.log(valid)
    }
    render(){
    return(
      (<div>
        <form onSubmit={this.check}>
        <input type="text" name="option"></input>
            <button>Valid</button>
            </form>
        </div>)
    )
}
}
  