import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';
import { GetFeedback } from '../services/feedback.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  providers:[GetFeedback,EnrollService]
})
export class AngularComponent {
  title = "Angular"
  constructor(private enrollService:EnrollService,private getFeedback:GetFeedback){

  }
  handleEnroll(){
    this.enrollService.onEnrollClicked(this.title)
  }
  handleFeedback(){
    this.getFeedback.provideFeedback(this.title)
  }

}
