import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-up-success',
  templateUrl: './top-up-success.page.html',
  styleUrls: ['./top-up-success.page.scss'],
})
export class TopUpSuccessPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  return(){
    this.router.navigate(['/my-wallet']);
  }

}

