import { Component } from '@angular/core';
import { Service1 } from '../service1.service';
@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component {
  constructor(private serve1:Service1){

  }
  sendData(msg){
    this.serve1.myEvent.emit(msg)
  }
}
