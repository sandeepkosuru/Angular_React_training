import { Component,EventEmitter,Input, Output } from '@angular/core';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  @Input() myInputMsg 
  @Output() myOutput = new EventEmitter() 
  myOutputMsg = "I'm Child Component"
  ngOnInit(){
    console.log(this.myInputMsg)
  }
  sendValues(){
    this.myOutput.emit(this.myOutputMsg)
  }

}
