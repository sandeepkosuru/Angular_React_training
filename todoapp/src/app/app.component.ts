import { Component } from '@angular/core';
import { Service1 } from './service1.service';
import { EnrollService } from './services/enroll.service';
import { GetFeedback } from './services/feedback.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service1,EnrollService,GetFeedback],
})
export class AppComponent {
  

  color = "green"
  myInputMsgParent = "I'm Passing msg from Parent component "

  getChildData(e){
    console.log(e)
  }

  title = 'myproject';
  arr = []
  val = ''
  error = ''
  
  constructor(){
    const json = localStorage.getItem("values")
    this.arr = JSON.parse(json)
  }
  addTODO(e){
    this.error = ''
    e.preventDefault()
    this.val = e.target.elements.inputData.value
    if(this.val==''){
      this.error = "Enter a valid String"
    }
    else{
      if(this.arr.includes(this.val)){
        this.error = "Already Exists"
      }
      else{
          this.arr.push(this.val)  
          const json = JSON.stringify(this.arr)
          localStorage.setItem("values",json)  
      }  
    }
    
    }
  remove(ele){
    this.arr.splice(this.arr.indexOf(ele),1)
    const json = JSON.stringify(this.arr)
    localStorage.setItem("values",json)  
    }
}
