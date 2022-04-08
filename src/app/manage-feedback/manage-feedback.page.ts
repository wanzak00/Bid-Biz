import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-feedback',
  templateUrl: './manage-feedback.page.html',
  styleUrls: ['./manage-feedback.page.scss'],
})
export class ManageFeedbackPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewFeedback(){
    this.router.navigate(['/feedback-dummy']);
  }

}
