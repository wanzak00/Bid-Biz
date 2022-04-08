import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-up',
  templateUrl: './top-up.page.html',
  styleUrls: ['./top-up.page.scss'],
})
export class TopUpPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  topUpSuccess(){
    this.router.navigate(['/top-up-success']);
  }

}
