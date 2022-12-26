import { Component } from '@angular/core';
import { Service1 } from '../service1.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component {
constructor(private serve1:Service1){
  this.serve1.myEvent.subscribe((msg)=>alert("Component received"+msg))
}
handleCapture(v){
  console.log(v)
}
}
