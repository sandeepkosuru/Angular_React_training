import { Injectable } from "@angular/core"
import { GetFeedback } from "./feedback.service"

@Injectable()
export class EnrollService {
    
    constructor(private fbs:GetFeedback){
    }
    onEnrollClicked(title) {
        console.log("1")
        console.log("1")
        console.log("1")
        console.log("1")
        console.log("1")
        console.log("1")
        alert("Thanks for enrolling in "+title)
    }
}