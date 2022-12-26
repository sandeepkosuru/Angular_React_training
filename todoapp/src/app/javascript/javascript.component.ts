import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';
import { GetFeedback } from '../services/feedback.service';
@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],

})
export class JavascriptComponent {
  title = 'JavaScript'
  constructor(private enrollService:EnrollService,private getFeedback:GetFeedback){

  }

  handleEnroll(){
    this.enrollService.onEnrollClicked(this.title)
  }
  handleFeedback(){
    this.getFeedback.provideFeedback(this.title)
  }
}
