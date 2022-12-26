import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angcounter';
  count = 0
  bool = false
  scores = [92,32,58,43,32,80]
  styles = {}

  constructor(){
      const json = localStorage.getItem("counter")
      this.count = JSON.parse(json)
      }
//       getStyle(i){
//         if(this.scores[i]>80){
//           return(
//             this.styles = {
//             "font-size":"10em",
//              "color":"green"
//             }
//           )
//         }
//         else if(this.scores[i]>41){
//           return(
//             this.styles = {
//             "font-size":"5em",
//              "color":"blue"
//             }
//           )
// }
// else{
//   return(
//     this.styles = {
//     "font-size":"2em",
//      "color":"red"
//     }
//   )
// }
// }
getClass(i){
  if(this.scores[i]>80){
    return("first")
  }
  else if(this.scores[i]>41){
    return("second")
  }
  else
  return("last")
}
  add(){
    this.count ++
    const json = JSON.stringify(this.count)
    localStorage.setItem("counter",json) 
  }
  sub(){
    this.count --
    const json = JSON.stringify(this.count)
    localStorage.setItem("counter",json) 
  }
  reset(){
    this.count =0
    const json = JSON.stringify(this.count)
    localStorage.setItem("counter",json) 
  }
  show(){
    this.bool=!this.bool
  }
}
